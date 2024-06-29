const seatNumbers = document.getElementsByClassName('seat-number');
let count = 0;
let leftSeat = 40


 
for(let seatNumber of seatNumbers){
    let seatClick = false;
    seatNumber.addEventListener('click',function (event){
        count = count + 1;
        setInnerText('seat-count',count)

         // Next button click for successful

 document.getElementById("number-feild").addEventListener('keyup', function(event){
    console.log(event.target.value);

    if(event.target.value && count >= 1){
        nextBtn.removeAttribute('disabled');
      }
    else if(event.target.value === ""){
        console.log("You did not provide phone number. please enter phone number");
        const phoneNumberMessage = document.getElementById('phone-message');
        phoneNumberMessage.innerText = 'please give phone number!';
       }
      else{
          nextBtn.setAttribute('disabled',true);
      }
          
 })

console.log("count",count);
const nextBtn= document.getElementById('next-btn');




  document.getElementById('next-btn').addEventListener("click", function(event){
      showElementById('success-page');
      hideElementById('all-offer-section');
      hideElementById('seat-choice-information');
      hideElementById('best-offer-section');
      hideElementById('header-section');
      hideElementById('footer-section');
      
      
  })



        const phoneNumber = document.getElementById("number-feild");
        const phoneNumberText = phoneNumber.value;
        const phoneNumberValue = parseInt(phoneNumberText);
    
        
        if(!seatClick){
            seatClick = true;
 
        }
        else{
            alert("you only purchase one seat one time.");
            setInnerText('seat-count',count-1);
            exit;
        }
        
        if(count >= 5){
            alert("you can not purchase more than 4 seat!")
            setInnerText('seat-count',count-1);
        }
        
        
        
        
        // const seatCount = document.getElementById('seat-count');
        // seatCount.innerText = count;
        // const seatCountNumber = seatCount.innerText;
        
        leftSeat = leftSeat - 1;
        const leftSeatNumber = document.getElementById('left-seat-number');
        leftSeatNumber.innerText = leftSeat;
        seatNumber.style.background = "#1DD100";

        // selected seat show in display
        // console.log(event.target.innerText);
        const seat = event.target.innerText;
        const perSeatPrice = document.getElementById('per-seat-price');
        const seatPrice = perSeatPrice.innerText;
        const selectedSeatName = document.getElementById('selected-seat-name');
        const li = document.createElement("li");
   
        const  p = document.createElement('p');
        p.innerText = seat;
        const p2 = document.createElement('p');
        p2.innerText = seatPrice;
        li.appendChild(p);
        li.appendChild(p2);
        selectedSeatName.appendChild(li);


        // Total Price 
        const totalPrice = document.getElementById('total-price').innerText;

        const sum = parseInt(totalPrice) + parseInt(seatPrice);

        setInnerText('total-price',sum);


        // Grand total

        let grandTotalId = document.getElementById('grand-total').innerHTML;
        const new15 = document.getElementById('new-15').innerText;
        const couple20 = document.getElementById('couple-20').innerText;
        
   
        let couponValue = "";

        if (couponValue === "") {
            setInnerText('grand-total',sum);
        }

        document.getElementById('apply-btn').addEventListener("click", function(event){
            
        couponValue =  document.getElementById("Copupon-field").value;;
        console.log("couponValue", couponValue );
             if(couponValue === "NEW15"){
                    const percentage = sum *(15/100);
                    const grandTotalSum = parseInt(sum) - parseInt(percentage);
                    setInnerText('grand-total',grandTotalSum);
            }else if(couponValue === "COUPLE20"){
                const percentage = sum *(20/100);
                const grandTotalSum = parseInt(sum) - parseInt(percentage);
                setInnerText('grand-total',grandTotalSum);
            }else if(couponValue === ""){
                const copuponMessage = document.getElementById('copupon-message');
                copuponMessage.innerText = 'You don not enter copupon code.'

            }
            else{
                const copuponMessage = document.getElementById('copupon-message');
                
                copuponMessage.innerText = `${couponValue} coupon code  does not match!`
            }
            
        });
       
        })


    function setInnerText(id, value){
        document.getElementById(id).innerText = value;
    }
    function hideElementById(elementId){
        const homeScreen = document.getElementById(elementId);
        homeScreen.classList.add('hidden');
    }
    function showElementById(elementId){
        const successfulPage = document.getElementById(elementId);
        successfulPage.classList.remove('hidden')

    }

    
    

}