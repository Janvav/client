import React from "react";
import Layout from "./../components/Layout/Layout";

const HomePage = () => {
  return (
    <Layout>
      
    </Layout>
  );
};

export default HomePage;




// import React,{useState,useEffect} from 'react';
// import {Modal, message} from 'antd';
// import { Form, Input, Select } from 'antd';
// import { Table } from "antd"; 
// import Layout from "./../components/Layout/Layout";
// import axios from 'axios';
// import Spinner from '../components/Spinner'

// const HomePage = () => {
//   const [showModal,setShowModal] = useState(false);
//   const [loading,setLoading] = useState(false);
//   const [allTransection, setAlltransection] = useState([])

//   // table data
// //   const columns = [
// //     {
// //     title:'Data',
// //     dataIndex:'date'
// //   },
// //     {
// //     title:'Amount',
// //     dataIndex:'amount'
// //   },
// //     {
// //     title:'Type',
// //     dataIndex:'type'
// //   },
// //     {
// //     title:'Category',
// //     dataIndex:'category'
// //   },
// //     {
// //     title:'Refrence',
// //     dataIndex:'refrence'
// //   },
// //     {
// //     title:'Actiond',

// //   },
// // ]

//   // getall Transection
//    const getAllTransections = async () => {
//     try {
//       const user  = JSON.parse(localStorage.getItem('user'))
//       setLoading(true)
//       // const res = await axios.post('/transections/get-transections',{userid:user._id})
//       const res = await axios.get('/transections/get-transections', { params: { userid: user._id } });

//       setLoading(false)
//       setAlltransection(res.data)
//       console.log(res.data)
//     }catch(error){
//       console.log(error)
//       message.error('Fetch Issue with Transection');

//     }
//    };
//   // 
//   //  const getAllTransections = async () => {
//   //   try {
//   //     const user = JSON.parse(localStorage.getItem('user'));
//   //     setLoading(true);
//   //     const res = await axios.get('/transections/get-transections', {
//   //       params: { userid: user._id },
//   //     });
//   //     setLoading(false);
//   //     setAlltransection(res.data);
//   //     console.log(res.data);
//   //   } catch (error) {
//   //     console.log(error);
//   //     message.error('Fetch Issue with Transection');
//   //   }
//   // };

//  //  useEffect Hook 
//     //  useEffect (()=> {
//     //   getAllTransections();
//     //  },[]);


     

//   // form Handling
 


//     const handleSubmit = async(values) => {
//        try{
//         const user = JSON.parse(localStorage.getItem('user'))
//         setLoading(true)
//         await axios.post('/transections/add-transection',{...values, userid:user._id})
//         setLoading(false)
//         message.success('Transection Added Successfully')
//         setShowModal(false)
//        }catch(error) {
//         setLoading(false);
//         console.error('Error adding transaction:', error);
//         message.error('Failed to add transaction');
//       }
//   }

//   return (
//     <Layout>
//     {loading && <Spinner/> }
//     <div className="filters">
//       <div>range filters</div>
    
//       <div>
//         <button className="btn btn-primary" onClick ={() => setShowModal(true)}>Add New</button>
//       </div>
//       </div>
//       <div className="content">
//         <Table columns ={columns} dataSource={allTransection}/>
//       </div>
//       <Modal title  = "Add Transection" open = {showModal} onCancel={()=>setShowModal(false)} footer = {false}>
      
//       <Form layout= "vertical" onFinish = {handleSubmit}>
//       <Form.Item label = "Amount" name = "amount">
//         <Input type = "text" />
//       </Form.Item>

//       {/* <Form.Item label = "Type" name = "type">
//         <Select>
//           <Select.Option value = "income">Income</Select.Option>
//           <Select.Option value = "expense">Expense</Select.Option>
//         </Select>
//       </Form.Item> */}
//       <Form.Item label="type" name="type">
//        <Select>
//         <Select.Option value="income">Income</Select.Option>
//         <Select.Option value="expense">Expense</Select.Option>
//           </Select>
// </Form.Item>

//       <Form.Item label = "Category" name = "category">
//         <Select>
//           <Select.Option value = "salary">Income</Select.Option>
//           <Select.Option value = "tip">Tip</Select.Option>
//           <Select.Option value = "project">Project</Select.Option>
//           <Select.Option value = "food">Food</Select.Option>
//           <Select.Option value = "movie">Movie</Select.Option>
//           <Select.Option value = "bills">Bills</Select.Option>
//           <Select.Option value = "medical">Medical</Select.Option>
//           <Select.Option value = "fee">Fee</Select.Option>
//           <Select.Option value = "tax">Tax</Select.Option>
//         </Select>
//         </Form.Item>

//       <Form.Item label = "date" name = "date">
//          <Input type='date'/>
//       </Form.Item>

//       <Form.Item label = "Refrence" name = "refrence">
//          <Input type='text'/>
//       </Form.Item>

//       <Form.Item label = "Description" name = "description">
//          <Input type='text'/>
//       </Form.Item>
//       <div className="d-flex justify-content-end">
//         <button type = "submit" className="btn btn-primary">Save</button>
//       </div>

//       </Form>

//       </Modal>
//     </Layout>
//   );
// };

// export default HomePage;