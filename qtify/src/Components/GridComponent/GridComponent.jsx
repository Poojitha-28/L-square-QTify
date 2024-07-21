import Card from "../Card/Card";
import styles from "./GridComponent.module.css"
import { useEffect, useState } from "react";
import Carousal from "../Carousal/Carousal";
import { CircularProgress } from "@mui/material";
import Filter from "../Filter/Filter";

export default function GridComponent({data,title,filteredSource,type})
{
  const[corausalToggle,setCarosualToggle]=useState(true);
  const[filters,setFilteredSource]=useState([{key:"ALL",label:"ALL"}]);
  const handleToggle=()=>{
    setCarosualToggle(!corausalToggle);
  }
  useEffect(()=>{
  if(filteredSource)
    {
      setFilteredSource([{key:"ALL",label:"ALL"},...filteredSource]);
    }
  },[filteredSource]);
  const showFilter=filters.length>1;
   return(
    <div className={styles.wrapper}>
     
      <div className={styles.header}>
      <div className={styles.title}>
      {title}
      </div>
      {type=="Albums" &&
      <button  className={styles.corousalButton}  
      onClick={handleToggle}
      >
        {corausalToggle?"Show All":"Collapse All"}
      </button>}
      </div>
  
      {showFilter? (<Filter songsData={data} type={type}  filters={filters}/>
      )
      :(
      <>
      {data.length===0?<CircularProgress/>:
      <>
        {corausalToggle?<Carousal data={data} type={type}/>
        :
            <div className={styles.gridcontainer}>
            {
              data.map((element,index) => (
                <div key={element.id} className={styles.griditem}>
                  <Card cardComponent={element} type={type}/>
                  </div>
              ))
            }
          </div>
        }
        </>
      }
      </>
      )
    }
     </div>
      );



}