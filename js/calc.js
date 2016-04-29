function showBurgerSprite(burgerFlag, elem, menuID) {
    if (burgerFlag) {
	elem.style.background="url(\"img/menu-open-sprite.png\") 0px 24px";
	document.getElementById(menuID).style.display = "block";
	return false
	} else {
	elem.style.background="url(\"img/menu-open-sprite.png\") -35px 0px";
	document.getElementById(menuID).style.display = "none";
	return true
	}
}

function symLimit(input) {
        if (input.value.length > 2) {
	        input.value = input.value.substring(0,2);
	           }
	           }

				
function popUpDisplay(id, flag) {
            popUp = document.getElementById(id);
			if (flag=='show') {
			    popUp.style.display = "block";
			} else if (flag=='hide') {
			    popUp.style.display = "none";
			    } 
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

function getTotalPrice(ent_lang, cap_lang) {

         if (ent_lang == 'E_EN' && cap_lang == 'C_EN') {
		     lang_coeff = 3;
		 } else if (ent_lang == 'E_EN' && cap_lang == 'C_RU') {
		      lang_coeff = 4;
		 } else if (ent_lang == 'E_RU' && cap_lang == 'C_EN') {
		      lang_coeff = 4;
		 } else if (ent_lang == 'E_RU' && cap_lang == 'C_RU') {
		      lang_coeff = 1;
		 }
		 
         duration = Number(document.getElementById("video-min-get-a-quote").value) + Number((document.getElementById("video-h-get-a-quote").value)*60);
		 discount_code = document.getElementById("calculate-discount-number").value;
		 
		switch (discount_code) {
		    case 'SUB10DIS':
			dis_coeff = 0.9
			break
			case 'SUB25DIS':
			dis_coeff = 0.75
			break
			case 'SUB50DIS':
			dis_coeff = 0.5
			break
			default:
			dis_coeff = 1
			break	
		}
		
		 work_term = document.getElementById("get-quote-limit-select").value;
		
		switch (work_term) {
		    case '24 hours':
			time_coeff = 2
			break
			case '1 week':
			time_coeff = 1.5
			break
			default:
			time_coeff = 1
			break
		}
		
        return lang_coeff*duration*dis_coeff*time_coeff;
               }
