import React,{ useState,useEffect } from 'react'

import CustomersService from '../../services/CustomersService'

const UpdateCustomerComponent = ({id,setShowUpdateCustomer,getAllCustomers}) => {

    const [customerName, setCustomerName] = useState("")
    const [customerPhone, setCustomerPhone] = useState("")
    const [customerAddress, setCustomerAddress] = useState("")
    



    const UpdateCustomer = (e)=>{
        e.preventDefault();

        const customer = {customerName,customerPhone,customerAddress};

        // console.log(customer)

      
        CustomersService.updateCustomer(id,customer).then(response => {

                setShowUpdateCustomer(false);

                getAllCustomers();

            }).catch(error=>{

                console.log(error);

            })

        

        
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CustomersService.getCustomerById(id);
                const { customerName, customerPhone, customerAddress } = response.data;
                setCustomerName(customerName);
                setCustomerPhone(customerPhone);
                setCustomerAddress(customerAddress);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [id]); 

 

    return (
        <div style={{position:"absolute",width:"100%",top:"250px",left:"50%",transform:"translateX(-50%) translateY(-50%)"}}>
            <br/>
           <div className="container">
               <div className="row">
                   <div className="card col-md-6 offset-md-3 offset-md-3" style={{boxShadow:"1px 2px 2px grey,-1px -2px 2px grey"}}>
                        <h2 className="text-center">Update Customer</h2>
                       <div className="card-body">
                           <form>
                               <div className="form-group mb-2">
                                   <label className="form-label">Customer Name :</label>
                                   <input 
                                    type="text" 
                                    placeholder="Enter customer name"
                                    name="customerName"
                                    className="form-control"
                                    value = {customerName}
                                    onChange={e=>setCustomerName(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">Customer Phone :</label>
                                   <input 
                                    type="text" 
                                    placeholder="Enter customer Phone"
                                    name="customerPhone"
                                    className="form-control"
                                    value = {customerPhone}
                                    onChange={e=>setCustomerPhone(e.target.value)} />
                               </div>
                               <div className="form-group mb-2">
                                   <label className="form-label">Customer Address :</label>
                                   <input 
                                    type="text" 
                                    placeholder="Enter customer address"
                                    name="customerAddress"
                                    className="form-control"
                                    value = {customerAddress}
                                    onChange={e=>setCustomerAddress(e.target.value)} />
                               </div>
                              

                                <button className="btn btn-success" onClick={(e)=>UpdateCustomer(e)}>Submit</button>
                                <button style={{marginLeft:'20px'}} className="btn btn-danger" onClick={()=>setShowUpdateCustomer(false)}>Cancel</button>
                           </form>
                       </div>
                   </div>
               </div>
           </div>
        </div>
    )
}

export default UpdateCustomerComponent
