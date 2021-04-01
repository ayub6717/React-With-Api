import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SelectSearch from "react-select-search";
import NavBar from "../../NavBar/NavBar";
import { Modal, Button } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import axios, { post } from 'axios';
import {Container, Row, Col } from "react-bootstrap";
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

const AdminAddMainService = () => {
  useEffect(() => {
    fetchItemCatagory();
  }, []);
  const typecode = [
    {
      value: "General",
      name: "General"
    },
    {
      value: "PerUnit",
      name: "Per Unit"
    },
    {
      value: "Quotation",
      name: "Quotation"
    },
  ];
  const [selectedTypecode, setSelectedTypecode] = useState("General");

  const [optionsCatagory, setOptionsCatagory] = useState([]);
  const [optionsSubCategory, setOptionsSubCatagory] = useState([]);
  const [optionsService, setOptionsService] = useState([]);
  const [optionsFinalService, setOptionsFinalService] = useState([]);

  const [categoryId, setCategoryId] = useState();
  const [categoryName, setCategoryName] = useState();
  const [serviceName, setServiceName] = useState();
  const [serviceId, setServiceId] = useState();
  const [subCategoryId, setSubCategoryId] = useState();
  const [thirdheading, setThirdHeading] = useState("");

  const [modalShow, setModalShow] = useState(false);
  const [modalShowDetails, setModalShowDetails] = useState(false);
  const [modalSecond, setModalSecond] = useState(false);
  const [subCategory, setSubCategory] = useState();
  const [finalName, setFinalName] = useState();
  const [finalPrice, setFinalPrice] = useState();

  const history = useHistory();

  const [inputList, setInputList] = useState([{ question: "", answer: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { question: "", answer: "" }]);
  };
const showConfirmboxFirstLayer = (id) => {
  confirmAlert({
    title: 'Confirm delete',
    message: 'Are you sure you want to delete?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => deleteCategory(id)
      },
      {
        label: 'No',
        onClick: () => console.log('Click No')
      }
    ]
  });
}
const handleTypecode = (value) => {
  setSelectedTypecode(value)
}
const showConfirmboxSecondLayer = (id) => {
  confirmAlert({
    title: 'Confirm delete',
    message: 'Are you sure you want to delete?',
    buttons: [
      {
        label: 'Yes',
        onClick: () => deleteSubCategory(id)
      },
      {
        label: 'No',
        onClick: () => console.log('Click No')
      }
    ]
  });
}




  //terms starts here
  const [inputListTerms, setInputListTerms] = useState([{ termsHeading: "", termsDetails: "" }]);

  // handle input change
  const handleInputChangeTerms = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListTerms];
    list[index][name] = value;
    setInputListTerms(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickTerms = index => {
    const list = [...inputListTerms];
    list.splice(index, 1);
    setInputListTerms(list);
  };

  // handle click event of the Add button
  const handleAddClickTerms = () => {
    setInputListTerms([...inputListTerms, { termsHeading: "", termsDetails: "" }]);
  };
  //terms ends here





  //choose starts here
  const [inputListChoose, setInputListChoose] = useState([{ chooseHeading: "", chooseDetails: "" }]);

  // handle input change
  const handleInputChangeChoose = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListChoose];
    list[index][name] = value;
    setInputListChoose(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickChoose = index => {
    const list = [...inputListChoose];
    list.splice(index, 1);
    setInputListChoose(list);
  };

  // handle click event of the Add button
  const handleAddClickChoose = () => {
    setInputListChoose([...inputListChoose, { termsHeading: "", termsDetails: "" }]);
  };
  //choose ends here



  //included starts here
  const [inputListIncluded, setInputListIncluded] = useState([{ includeHeading: "" }]);

  // handle input change
  const handleInputChangeIncluded = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListIncluded];
    list[index][name] = value;
    setInputListIncluded(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickIncluded = index => {
    const list = [...inputListIncluded];
    list.splice(index, 1);
    setInputListIncluded(list);
  };

  // handle click event of the Add button
  const handleAddClickIncluded = () => {
    setInputListIncluded([...inputListIncluded, { includeHeading: "" }]);
  };
  //included ends here

   //mini starts here
   const [inputListMini, setInputListMini] = useState([{ mini: "" }]);

   // handle input change
   const handleInputChangeMini = (e, index) => {
     const { name, value } = e.target;
     const list = [...inputListMini];
     list[index][name] = value;
     setInputListMini(list);
   };
 
   // handle click event of the Remove button
   const handleRemoveClickMini = index => {
     const list = [...inputListMini];
     list.splice(index, 1);
     setInputListMini(list);
   };
 
   // handle click event of the Add button
   const handleAddClickMini = () => {
    setInputListMini([...inputListMini, { mini: "" }]);
   };
   //mini ends here


  //excluded starts here
  const [inputListExclude, setInputListExclude] = useState([{ excludeHeading: "" }]);

  // handle input change
  const handleInputChangeExclude = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListExclude];
    list[index][name] = value;
    setInputListExclude(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickExclude = index => {
    const list = [...inputListExclude];
    list.splice(index, 1);
    setInputListExclude(list);
  };

  // handle click event of the Add button
  const handleAddClickExclude = () => {
    setInputListExclude([...inputListExclude, { excludeHeading: "" }]);
  };
  //exclude ends here


  const handleDetailsModal = () => {   
    //setModalShowDetails(true) 
    try {
      fetchSubCategoryDetails();
      setModalShowDetails(true)
    } catch (error) {
      setModalShowDetails(true)
    }
    //fetchSubCategoryDetails().then(() => setModalShowDetails(true));
  }

  const fetchSubCategoryDetails = async () => {
    const data = await fetch(
      `https://kentradigital.com/api/getServiceDetailsadmin?servicetypeID=` + subCategoryId
    );
    const item = await data.json();
    setNightShifting(item.nightshifting)
    setInputDetails(item.details)
    setInputPayment(item.payment)
    setInputPricing(item.pricing)
    setThirdHeading(item.thirdheading)


    if(item.minidetails.length <1){
      setInputListMini([{mini:""}])
    }else{
      setInputListMini(item.minidetails)

    }
    

    if(item.faq.length <1){
      setInputList([{question:"",answer:""}])
    }else{
      setInputList(item.faq)
    }

    if(item.choose.length <1){
      setInputListChoose([{chooseHeading:"",chooseDetails:""}])
    }else{
      setInputListChoose(item.choose)
    }

    if(item.excludeHeading.length <1){
      setInputListExclude([{excludeHeading:""}])
    }else{
      setInputListExclude(item.excludeHeading)
    }

    if(item.servicefeatures.length <1){
      setInputListFeatures([{featuresHeading:""}])
    }else{
      setInputListFeatures(item.servicefeatures)
    }

    if(item.includeHeading.length <1){
      setInputListIncluded([{includeHeading:""}])
    }else{
      setInputListIncluded(item.includeHeading)
    }

    if(item.tandc.length <1){
      setInputListTerms([{termsHeading:"",termsDetails:""}])
    }else{
      setInputListTerms(item.tandc)
    }

  };


  //features starts here
  const [inputListFeatures, setInputListFeatures] = useState([{ featuresHeading: "" }]);

  // handle input change
  const handleInputChangeFeatures = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputListFeatures];
    list[index][name] = value;
    setInputListFeatures(list);
  };

  // handle click event of the Remove button
  const handleRemoveClickFeatures = index => {
    const list = [...inputListFeatures];
    list.splice(index, 1);
    setInputListFeatures(list);
  };

  // handle click event of the Add button
  const handleAddClickFeatures = () => {
    setInputListFeatures([...inputListFeatures, { featuresHeading: "" }]);
  };
  //features ends here

  //details and others start that are not dynamic
  const [inputDetails, setInputDetails] = useState();
  const [inputPricing, setInputPricing] = useState();
  const [inputPayment, setInputPayment] = useState();
  const [nightShifting, setNightShifting] = useState();




  const createCategory = async () => {
    const optionsCatagory = await fetch("https://kentradigital.com/api/addMainCatagory?catagoryName="
      + categoryName);
    fetchItemCatagory();

  };

  const createSubCategory = async (id) => {
    const link = "https://kentradigital.com/api/addServiceType?servicetypename=" + subCategory
      + "&maincatagoryid="
      + categoryId;
    const optionsCatagory = await fetch(link);
    fetchItemSubCatagory(id);

  };

  const createService = async (id) => {

    const link = "https://kentradigital.com/api/addService?servicename=" + serviceName
      + "&servicetypeid="
      + subCategoryId;
    fetch(link)
      .then((res) => res.json())
      .then((result) => { console.log(result); });
    fetchItemService(id);
  };

  const createFinalService = async () => {
    const link = "https://kentradigital.com/api/addFinalService?servicename="
      + finalName
      + "&servicesid="
      + serviceId
      + "&price="
      + finalPrice
      +"&typecode="
      +selectedTypecode;
    fetch(link)
      .then((res) => res.json())
      .then((result) => { console.log(result); });
      


  };
/*delete functions START*/
const deleteCategory = async (id) => {
  const link = "https://kentradigital.com/api/mainservice?msid=" + id;
  fetch(link)
    .then((res) => res.json())
    .then((result) => alert("Main Category Deleted!") );
    //window.location.reload();
};

const deleteSubCategory = async (id) => {
  const link = "https://kentradigital.com/api/servicetype?servicetypeID=" + id;
  fetch(link)
    .then((res) => res.json())
    .then((result) => alert("Sub Category Deleted!") );
    //window.location.reload();
};

const deleteService = async (id) => {
  const link = "https://kentradigital.com/api/service?sid=" + id;
  fetch(link)
    .then((res) => res.json())
    .then((result) => alert("Service Deleted!") );
  };

const deleteFinalService = async (id) => {
  const link = "https://kentradigital.com/api/deletefinalservice?fsid=" + id;
  fetch(link)
    .then((res) => res.json())
    .then((result) => alert("Sub Service Deleted!") );
};
/*delete functions END*/

  const handleCategory = (id) => {
    setCategoryId(id);
    fetchItemSubCatagory(id);
  }

  const handleSubCategory = (id) => {

    setSubCategoryId(id);
    fetchItemService(id);
  }

  const handleService = (id) => {
    fetchItemFinalService(id);
    setServiceId(id);
  }

  const fetchItemCatagory = async () => {
    const optionsCatagory = await fetch(
      `https://kentradigital.com/api/showservice`
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, category_name }) => ({
      value: id,
      name: category_name,
    }));
    setOptionsCatagory(newArrayCatagory);
  };

  const fetchItemSubCatagory = async (id) => {
    const optionsCatagory = await fetch(
      `https://kentradigital.com/api/subcatagory?maincatagoryid=` + id
    );
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, service_type_name }) => ({
      value: id,
      name: service_type_name,
    }));
    setOptionsSubCatagory(newArrayCatagory);
  };

  const fetchItemService = async (id) => {
    const link = `https://kentradigital.com/api/servicelist?subcatagoryid=` + id;
    const optionsCatagory = await fetch(link);
    const itemCatagory = await optionsCatagory.json();
    const newArrayCatagory = itemCatagory.map(({ id, service_name }) => ({
      value: id,
      name: service_name,
    }));
    setOptionsService(newArrayCatagory);
    
  };

  const fetchItemFinalService = async (id) => {
    const link = `https://kentradigital.com/api/finalServiceList?serviceid=` + id;
    const optionsCatagory = await fetch(link);
    const itemCatagory = await optionsCatagory.json();
    
    setOptionsFinalService(itemCatagory);
  };

  const modalHide = async (id) => {
    createFinalService()
      .then(() => setModalSecond(true))
  }
  const modalSecondhide = () => {
    setModalShow(false);
    setModalSecond(false);
    setFinalName("");
    setFinalPrice("");

  }

  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
//image2 is cover

  //file upload using axios

  
  const uploadonChange=(e)=> {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
          return;
    createImage(files[0]);
  }
  const createImage=(file)=> {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  const uploadonChangeImage2=(e)=> {
    let files = e.target.files || e.dataTransfer.files;
    if (!files.length)
          return;
    createImage2(files[0]);
  }
  const createImage2=(file)=> {
    let reader = new FileReader();
    reader.onload = (e) => {
      setImage2(e.target.result);
    };

    reader.readAsDataURL(file);
  }

  const onFormSubmit=()=>{
    if(inputDetails!==""){
      fileUpload(image,  image2);
    }else{
      alert("Please fill in 'Details'")
    }
  }

  const fileUpload=(image, image2)=>{
    console.log("file upload hit")
    const success = () =>{
      history.push("/admin/a6b1q35/addmainservice");
      setNightShifting("")
      setInputDetails("")
      setInputPayment("")
      setThirdHeading("")
      setInputPricing("")
      setInputListMini([{mini:""}])
      setInputList([{question:"",answer:""}])
      setInputListChoose([{chooseHeading:"",chooseDetails:""}])
      setInputListExclude([{excludeHeading:""}])
      setInputListFeatures([{featuresHeading:""}])
      setInputListIncluded([{includeHeading:""}])
      setInputListTerms([{termsHeading:"",termsDetails:""}])
      setModalShowDetails(false);

      alert("Success!");

    }
    const url = "https://kentradigital.com/api/addservicedetails";
    const arr = [{includeHeading:"good service quality"},{includeHeading:"best behaviour"}];
    const arrFaq=[{question:"question 1 new",answer:"answer 1"},{question:"question 2",answer:"answer 2"}];
    const arrexclude=[{excludeHeading:"new price refund"},{excludeHeading:"gifts"}];
    const details = "new details of service Id 5.. details details details";
    const pricing = "pricing of service Id 5..new ";
    const payment = "paymet of service Id 5.. new";
    const nightshifting = "night shifting of service Id 5.. ";
    const tandc = [{termsHeading:"terms title 1",termsDetails:"terms details 1"},{termsHeading:"terms title 2",termsDetails:"terms details 2"}]
    const choose = [{chooseHeading:"choose title 1",chooseDetails:"choose details 1"},{chooseHeading:"choose title 2",chooseDetails:"choose details 2"},];
    const servicefeatures = [{featuresHeading:"service feature 1"},{featuresHeading:"service feature 2"}];
    //const minidetails=[{mini:"mini details 1 new"},{mini:"mini details 2 new"}];
    try {
      post(url,  
        { 
          serviceId: subCategoryId,
          iconfile: image, 
          coverfile: image2,
          includeHeading: inputListIncluded,
          faq: inputList,
          excludeHeading: inputListExclude,
          details: inputDetails,
          pricing: inputPricing,
          payment: inputPayment,
          nightshifting: nightShifting,
          tandc: inputListTerms,
          choose: inputListChoose,
          servicefeatures: inputListFeatures,
          minidetails: inputListMini,
          thirdheading: thirdheading
        })
      .then(response => success() )
    } catch (error) {
      alert("error!")
    }
    
  }

  //file upload using axios END

  return (
    <div>
      <Modal
        size="lg"
        show={modalShow}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {modalSecond ?
          <Modal.Body>
            <h1 className="text-success">
              <svg
                xmlns="https://www.w3.org/2000/svg"
                width="140"
                height="140"
                fill="currentColor"
                class="bi bi-check"
                viewBox="0 0 16 16"
              >
                <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
              </svg>
           Done!
          </h1>
          </Modal.Body>
          :

          <Modal.Body>
            <h1>
              Create this new Service?
          </h1>
            <h2>
              Title: {finalName} <br />Price: {finalPrice}
            </h2>
          </Modal.Body>
        }
        <Modal.Footer>
          {modalSecond ?
            <Button className="container btn-success" onClick={() => modalSecondhide()}>
              Done
            </Button>
            :

            <Button className="container btn-success" onClick={() => modalHide()}>
              Yes
          </Button>
          }
        </Modal.Footer>
      </Modal>

      <Modal
        size="lg"
        show={modalShowDetails}
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={() => setModalShowDetails(false)}

      >
        <Modal.Header>
          <h1 className="text-success" style={{ textAlign: "center" }}>
            Adding Details to your Sub Category
              </h1>
        </Modal.Header>
        <Modal.Body>
          <div>
              <div style={{ marginTop: "20px" }}>
                <h4 className="text-success">
                  Upload Background Photo
                </h4>
                <label>Icon File</label>
                <input
                  className="form-control"
                  type="file"
                  name="coverfile"
                  placeholder="Cover File"
                  onChange={uploadonChange} />
                <label style={{marginTop:"20px"}}>Cover File</label>

                  <input
                  className="form-control"
                  type="file"
                  name="coverfile"
                  placeholder="Cover File"
                  onChange={uploadonChangeImage2} />
                

              </div>

           

            
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Mini Details
              </h4>
              {inputListMini.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <textarea
                          style={{height:"200px"}}
                          name="mini"
                          className="form-control"
                          placeholder="Enter What is mini details"
                          value={x.mini}
                          onChange={e => handleInputChangeMini(e, i)}
                        />

                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListMini.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickMini}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListMini.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickMini(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Details
              </h4>
              <textarea
                style={{height:"200px"}}
                className="form-control"
                type="text"
                name=""
                id=""
                value={inputDetails}
                onChange={(event) => setInputDetails(event.target.value)}
                placeholder="Add Details"
                required
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                What's Included?
              </h4>
              {inputListIncluded.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <textarea
                          style={{height:"100px"}}
                          name="includeHeading"
                          className="form-control"
                          placeholder="Enter What is included"
                          value={x.includeHeading}
                          onChange={e => handleInputChangeIncluded(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListIncluded.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickIncluded}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListIncluded.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickIncluded(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                What's Excluded?
              </h4>
              {inputListExclude.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <textarea
                          style={{height:"100px"}}
                          className="form-control"
                          placeholder="Enter What is excluded"
                          value={x.excludeHeading}
                          onChange={e => handleInputChangeExclude(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListExclude.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickExclude}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListExclude.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickExclude(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Add FAQ
              </h4>
              {inputList.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <input
                          name="question"
                          className="form-control"
                          placeholder="Enter Question"
                          value={x.question}
                          onChange={e => handleInputChange(e, i)}
                        />
                        <input
                          className="form-control"
                          name="answer"
                          placeholder="Enter Answer"
                          value={x.answer}
                          onChange={e => handleInputChange(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputList.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClick}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputList.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClick(i)}>Remove</button>}
                      </div>

                    </div>


                    <div>


                    </div>
                  </div>
                );
              })}
            </div>
            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Add Terms and Conditions
              </h4>
              {inputListTerms.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <input
                          name="termsHeading"
                          className="form-control"
                          placeholder="Enter Heading"
                          value={x.termsHeading}
                          onChange={e => handleInputChangeTerms(e, i)}
                        />
                        <input
                          className="form-control"
                          name="termsDetails"
                          placeholder="Enter Details"
                          value={x.termsDetails}
                          onChange={e => handleInputChangeTerms(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputListTerms.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickTerms}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputListTerms.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickTerms(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Why choose us?
              </h4>
              {inputListChoose.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <input
                          name="chooseHeading"
                          className="form-control"
                          placeholder="Enter Heading"
                          value={x.chooseHeading}
                          onChange={e => handleInputChangeChoose(e, i)}
                        />
                        <input
                          className="form-control"
                          name="chooseDetails"
                          placeholder="Enter Details"
                          value={x.chooseDetails}
                          onChange={e => handleInputChangeChoose(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputListChoose.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickChoose}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "20px" }}>
                        {inputListChoose.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickChoose(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Service Features
              </h4>
              {inputListFeatures.map((x, i) => {
                return (
                  <div>

                    <div className="row justify-content-center" style={{ marginBottom: "20px" }}>
                      <div className="col-md-8">
                        <input
                          name="featuresHeading"
                          className="form-control"
                          placeholder="Enter Service Features"
                          value={x.featuresHeading}
                          onChange={e => handleInputChangeFeatures(e, i)}
                        />
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListFeatures.length - 1 === i &&
                          <button className="btn btn-success" onClick={handleAddClickFeatures}>Add More</button>
                        }
                      </div>
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        {inputListFeatures.length !== 1 &&
                          <button className="btn btn-danger" onClick={() => handleRemoveClickFeatures(i)}>Remove</button>}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <hr style={{
              color: '#33669A',
              marginTop: '20px',
              width: "100%",
              backgroundColor: '#33669A',
              height: 2,
              borderColor: '#33669A'
            }} />
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Pricing
              </h4>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                value={inputPricing}
                onChange={(event) => setInputPricing(event.target.value)}
                placeholder="Add Pricing"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Payment
              </h4>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                value={inputPayment}
                onChange={(event) => setInputPayment(event.target.value)}
                placeholder="Add Details"
              />
            </div>
            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Night Shifting
              </h4>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                value={nightShifting}
                onChange={(event) => setNightShifting(event.target.value)}
                placeholder="Add Details"
              />
            </div>

            <div style={{ marginTop: "20px" }}>
              <h4 className="text-success">
                Sidebar Heading
              </h4>
              <input
                className="form-control"
                type="text"
                name=""
                id=""
                value={thirdheading}
                onChange={(event) => setThirdHeading(event.target.value)}
                placeholder="Add Sidebar Heading"
              />
            </div>

          </div>


        </Modal.Body>



        <Modal.Footer>
          <Button className="container btn-success" onClick={() => onFormSubmit()}>
            Done
            </Button>
        </Modal.Footer>
      </Modal>

      <div className="mb-5">
        <NavBar></NavBar>
      </div>
      <div className="container pt-5">
        <h4>
          Home <span className="homeSpan">.</span> Add New Service
        </h4>{" "}
        <br />
        <div className="row d-flex">
          <div className="col-md-2">
          <ol className="UserDashboardList">
            <li
                onClick={() => {
                  history.push("/admin/a6b1q35/account");
                }}
              >
                Admin Account
              </li>{" "}
              <li
                 className="UserDashboardListAccount"
              >
                Add New Service
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/addlocation");
                }}
              >
                Add New Location
              </li>              
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingorder");
                }}
              >
                Pending Order
              </li>
              <li  onClick={() => {
                  history.push("/admin/a6b1q35/assignedorder");
                }}
              >
                Assigned Order
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/pendingquotation");
                }}
              >
                Pending Quotation
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regusers");
                }}
              >
                Registered Users
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/regvendors");
                }}
              >
                Registered Vendors
              </li>
              <li
                onClick={() => {
                  history.push("/admin/a6b1q35/placeorder");
                }}
              >
                Place Order
              </li>
            </ol>
          </div>
          <div className="col-md-2 vl"></div>
          <div className="col-md-8">
            <div className="container">
              <h1>Add New Service</h1>

              <div className="bg-white p-5" style={{ marginTop: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 1</h2>
                Select from these Categories

                <div className="row justify-content-center">
                  <div className="col-md-8">
                    <SelectSearch
                      id="test-id"
                      options={optionsCatagory}
                      onChange={handleCategory}
                      placeholder="Categories"
                    />
                  </div>
                  <div className="col-md-4">
                    
                        <button className="btn btn-danger" style={{width:"100%", marginTop:"0"}}  
                        onClick={() => showConfirmboxFirstLayer(categoryId)}>
                          Delete this category
                        </button>
                      
                  </div>
                  <div className="col-md-12" style={{marginTop:"20px"}}>
                    Or Create New Category
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={categoryName}
                          onChange={(event) => setCategoryName(event.target.value)}
                          placeholder="New Category"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success" style={{width:"100%",}} onClick={() => createCategory()}>Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-5" style={{ marginTop: "30px" }}>

                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 2</h2>
                <div className="row justify-content-center">
                  <div className="col-md-6">
                    Select from these Sub Categories
                    <SelectSearch
                      id="test-id"
                      options={optionsSubCategory}
                      onChange={handleSubCategory}
                      placeholder="Sub Categories"
                    />
                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-success"
                      onClick={() => handleDetailsModal()}
                      style={{ marginTop: "25px", width:"100%" }}>
                      Add Details
                    </button>

                  </div>
                  <div className="col-md-3">
                    <button
                      className="btn btn-danger"
                      onClick={() => showConfirmboxSecondLayer(subCategoryId)}
                      style={{ marginTop: "25px", width:"100%" }}>
                      Delete
                    </button>

                  </div>
                  <div className="col-md-12" style={{ marginTop: "30px" }}>
                    Or Create New Sub Category
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={subCategory}
                          onChange={(event) => setSubCategory(event.target.value)}
                          placeholder="New Sub Category"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success"  style={{width:"100%", marginTop:"0"}}
                        onClick={() => createSubCategory(categoryId)}>Create</button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="bg-white p-5" style={{ marginTop: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 3</h2>
                <div className="row justify-content-center">
                  <div className="col-md-8">
                    Select from these Services
                    <SelectSearch
                      id="test-id"
                      options={optionsService}
                      onChange={handleService}
                      placeholder="Services"
                    />
                  </div>
                  <div className="col-md-4">
                        <button className="btn btn-danger" style={{width:"100%", marginTop:"25px"}} 
                        onClick={() => deleteService(serviceId)}>Delete</button>
                      </div>
                      
                  <div className="col-md-12" style={{marginTop:"25px"}}>
                    Or Create New Service
                    <div className="row justify-content-center">
                      <div className="col-md-8">
                        <input
                          type="text"
                          name=""
                          id=""
                          className="form-control"
                          style={{ height: "40px" }}
                          value={serviceName}
                          onChange={(event) => setServiceName(event.target.value)}
                          placeholder="New Service"
                        />
                      </div>
                      <div className="col-md-4">
                        <button className="btn btn-success" style={{width:"100%", marginTop:"0"}} onClick={() => createService(subCategoryId)}>Create</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5" style={{ marginTop: "30px", marginBottom: "30px" }}>
                <h2 style={{ textAlign: "center", marginTop: -30, marginBottom: 20 }}>Step 4</h2>
                <div>

                            {optionsFinalService.map((item) => (
                              <div className="cart-item" style={{backgroundColor:"#33669A30"}}>
                                <Row style={{ margin: 0, alignItems:'center' }}>
                                  <h4
                                    style={{
                                      width:"60%",
                                      alignSelf: "center",
                                      marginLeft: "20px",
                                      fontSize: "18px",
                                      paddingTop: "10px",
                                    }}
                                    key={item.id}
                                  >
                                    {item.service_name}
                                    
                                  </h4>
                                  <button className="btn btn-danger" style={{width:"30%", marginTop:"25px"}} 
                                    onClick={() => deleteFinalService(item.id)}>Delete</button>                               
                                  
                                </Row>
                                <p style={{ fontSize: "16px", marginLeft:"30px", marginTop:"-0px", marginBottom: "10px" }}>
                                      BDT {item.price}
                                    </p>
                              </div>
                            ))}
                        </div>

                Create New Sub Service
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  style={{ marginBottom: "20px" }}
                  value={finalName}
                  onChange={(event) => setFinalName(event.target.value)}
                  placeholder="New Sub Service"
                />{" "}
                Price
                <input
                  className="form-control"
                  type="text"
                  name=""
                  id=""
                  style={{ marginBottom: "20px" }}

                  value={finalPrice}
                  onChange={(event) => setFinalPrice(event.target.value)}
                  placeholder="Price"
                />{" "}
                Select Type
                <SelectSearch
                  options={typecode}
                  onChange={handleTypecode}
                  placeholder="General"
                />
                <button className="btn btn-success" style={{ width: "100%" , marginTop:"20px"}} onClick={() => setModalShow(true)}>Create Sub Service</button>
                <br />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddMainService;
