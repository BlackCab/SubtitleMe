function showPopUp(id) {
		    popUp = document.getElementById(id);
		    popUp.style.display = "block";
		}
		
function hidePopUp(id) {
                    popUp = document.getElementById(id);
                    popUp.style.display = "none";
                }
				
function passData(from_id, to_id) {
                   from = document.getElementById(from_id);
                   to = document.getElementById(to_id);
                   if (from.value !="") {
                   to.value = from.value;
                       } else {
				    to.value = from.placeholder;   
				    } 			   
                }

function passRadioBtnStatus(from_radio_id, to_radio_id) {
                   from_radiobtn = document.getElementById(from_radio_id);
                   to_radiobtn = document.getElementById(to_radio_id);
                   to_radiobtn.checked = from_radiobtn.checked;				   
}
