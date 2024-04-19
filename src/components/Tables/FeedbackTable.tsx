import React, { useState,useRef } from 'react';
import { Table, Tag, Space,Input } from 'antd';
import { EyeOutlined ,SearchOutlined} from '@ant-design/icons';
// import 'antd/dist/antd.css';
import { useNavigate } from 'react-router-dom';
import ReactDragListView from 'react-drag-listview'
import moment from 'moment';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import Highlighter from 'react-highlight-words';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import type { InputRef } from 'antd';


type FeedbackType= {
  feedbackId: number;
  userId: number;
  feedbackSource: 'Driver' | 'Rider';
  feedbackDate: string;
  rating: number;
  comments: string;
  tripId: number;
  feedbackType: 'Positive' | 'Negative' | 'Neutral';
  reportedIssues: string;
}
type DataIndex = keyof FeedbackType;

const FeedbackTable: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const searchInput = useRef<InputRef>(null);
  const [feedbackfilter,setFeedbackFilter]=useState<any[]>( [
    {
      feedbackId: 1,
      userId: 101,
      feedbackSource: 'Driver',
      feedbackDate: '2022-02-15',
      rating: 4,
      comments: 'Great service!',
      tripId: 201,
      feedbackType: 'Positive',
      reportedIssues: '',
    },
    {
      feedbackId: 2,
      userId: 102,
      feedbackSource: 'Rider',
      feedbackDate: '2022-02-20',
      rating: 5,
      comments: 'Excellent experi...',
      tripId: 202,
      feedbackType: 'Positive',
      reportedIssues: '',
    },
    {
      feedbackId: 3,
      userId: 103,
      feedbackSource: 'Driver',
      feedbackDate: '2022-03-10',
      rating: 3,
      comments: 'Average ser....',
      tripId: 203,
      feedbackType: 'Neutral',
      reportedIssues: '',
    },
    {
      feedbackId: 4,
      userId: 104,
      feedbackSource: 'Rider',
      feedbackDate: '2022-03-25',
      rating: 2,
      comments: 'Poor experience.',
      tripId: 204,
      feedbackType: 'Negative',
      reportedIssues: 'Late arrival',
    },
    {
      feedbackId: 5,
      userId: 105,
      feedbackSource: 'Driver',
      feedbackDate: '2022-04-05',
      rating: 4,
      comments: 'Good service ove...',
      tripId: 205,
      feedbackType: 'Positive',
      reportedIssues: '',
    },
    // Add more dummy data as needed
  ]);
  
  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<FeedbackType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
      <div style={{ padding: 8 }} onKeyDown={e => e.stopPropagation()}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={`${selectedKeys[0] || ''}`}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <button
            className='bg-black text-white px-5 py-1 rounded-md'
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          
          
          >
            Search
          </button>
          <button className='bg-black text-white px-5 py-1 rounded-md'
            onClick={() => clearFilters && handleReset(clearFilters)}
          
          >
            Reset
          </button>
        
          
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        .toString()
        .toLowerCase()
        .includes((value as string).toLowerCase()),
    onFilterDropdownOpenChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });
 
    const navigate=useNavigate()
  const [column,setColumns] =useState<any[]>( [
    {
      title: 'Feedback ID',
      dataIndex: 'feedbackId',
      ...getColumnSearchProps('feedbackId'),
      key: 'feedbackId',
    },
    {
      title: 'User ID',
      dataIndex: 'userId',
      ...getColumnSearchProps('userId'),
      key: 'userId',
    },
    {
      title: 'Feedback Source',
      dataIndex: 'feedbackSource',
      ...getColumnSearchProps('feedbackSource'),
      key: 'feedbackSource',
      render: (source: 'Driver' | 'Rider') => (
        <Tag color={source === 'Driver' ? 'blue' : 'green'}>{source}</Tag>
      ),
    },
    {
      title: 'Feedback Date',
      dataIndex: 'feedbackDate',
      key: 'feedbackDate',
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
    },
    {
      title: 'Comments',
      dataIndex: 'comments',
      key: 'comments',
    },
    {
      title: 'Trip ID',
      dataIndex: 'tripId',
      ...getColumnSearchProps('tripId'),
      key: 'tripId',
    },
    {
      title: 'Feedback Type',
      dataIndex: 'feedbackType',
      key: 'feedbackType',
      render: (type: 'Positive' | 'Negative' | 'Neutral') => (
        <Tag color={type === 'Positive' ? 'green' : type === 'Negative' ? 'red' : 'blue'}>{type}</Tag>
      ),
    },
    {
      title: 'Reported Issues',
      dataIndex: 'reportedIssues',
      key: 'reportedIssues',
    },
    {
      title: 'Action',
      key: 'action',
      render: (text: any, record: FeedbackType) => (
        <Space size="middle">
          <EyeOutlined onClick={() =>navigate('/')} />
        </Space>
      ),
    },
  ]);

  const dragProps = {
    onDragEnd(fromIndex: number, toIndex: number) {
      const updatedColumns = [...column];
      const item = updatedColumns.splice(fromIndex, 1)[0];
      updatedColumns.splice(toIndex, 0, item);
      setColumns(updatedColumns);
    },
    nodeSelector: 'th',
  };

  return (

    <div className='h-[100vh] w-[1300px]'>
        <div className=" font-poppins mt-5 
       text-black overflow-hidden font-semibold">
     
 <ReactDragListView.DragColumn {...dragProps}>
 <Table
      dataSource={feedbackfilter}
      columns={column}
      size='small'
      scroll={{y:600,x:900}}
      rowClassName={`text-[15px] highlight-border `}
      pagination={false}  className="shadow-2xl ml-2 mr-3 
        font-poppins  mt-5 bg-white
       text-black custom-table 
        overflow-hidden font-semibold"
    />
 </ReactDragListView.DragColumn>
 </div>
    </div>
  
  );
};

export default FeedbackTable;
