import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ApiService from "../../services/ApiService";

const ClassDetails = () => {
  const [classDetails, setClassDetails] = useState({});

  const location = useLocation();

  useEffect(() => {
    const fetchDetails = async () => {
      const classDetails = await ApiService.getDetails(
        location.state.classTitle.url
      );
      setClassDetails(classDetails);
    };
    fetchDetails();
  }, [location.state.classTitle.url]);

  return (
    <>
      <div>
        { classDetails.name ? 
          <>
            <img src="http://theoldreader.com/kittens/320/240/" 
            alt="" />
            <h2>{ classDetails.name }</h2>
            <div>Hit die: d{ classDetails.hit_die }</div>
            <h3>Profincies:</h3>
            { classDetails.proficiencies.map(prof => 
              <div key={ prof.index }>{ prof.name }</div>
            )}
          </>
         : 
          <>
            <p>Loading class details ...</p>
          </>
        }
      </div>
    </>
  );
};

export default ClassDetails;
