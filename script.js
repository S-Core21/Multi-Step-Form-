let next_one = document.getElementById('next1')
let next_two = document.getElementById('next2')
let next_three = document.getElementById('next3')
let next_four = document.getElementById('next4')
let back_one = document.getElementById('back')
let back_two = document.getElementById('back1')
let back_three = document.getElementById('back2')
let firstPage = document.querySelector('.personal')
let secondPage = document.querySelector('.plan')
let thirdPage = document.querySelector('.ads')
let fourthPage = document.querySelector('.finish')
let thanks = document.querySelector('.thanks')
let name = document.getElementById('name')
let email = document.getElementById('email')
let phno = document.getElementById('phno')
let field = document.querySelectorAll('.field') 
let number = parseInt(phno.value)
let mo_yr = document.getElementById('check')
let name_true, email_true, phno_true
let next1,next2
let next3 = true
let monthly = true
let yearly;
let free = document.querySelectorAll('.free')
let moORyr = document.querySelectorAll('.mo')
let service = document.getElementById('first_ads')
let storage = document.getElementById('sec_ads')
let profile = document.getElementById('thrid_ads')
let service_selected = false
let storage_selected = false
let profile_selected = false
let arcade = document.getElementById('arcade')
let advanced = document.getElementById('advanced')
let pro = document.getElementById('proL')
let plancost = document.getElementById('plancost')
let plancost2 = document.getElementById('p2')
let plancost3 = document.getElementById('p3')
let plancost4 = document.getElementById('p4')
let arcade_clicked, advanced_clicked, pro_clicked
let totalsss = []




next_one.addEventListener('click', ()=>{
        if(name.value == null || name.value == ''){
            document.getElementById('field1').style.visibility = 'visible'
            name.style.border = '1px solid red'
        }else{
            document.getElementById('field1').style.visibility = 'hidden'
            setTimeout(()=>{
               name.style.border = '1px solid green'
            },1000)
            name_true = true
        }
        if(email.value == null || email.value == ''){
            document.getElementById('field2').style.visibility = 'visible'
            email.style.border = '1px solid red'
        }else{
            document.getElementById('field2').style.visibility = 'hidden'
            setTimeout(()=>{
               email.style.border = '1px solid green'
            },1000)
            email_true = true
        }
        if(phno.value == null || phno.value  == ''){
            document.getElementById('field3').style.visibility = 'visible'
            phno.style.border = '1px solid red'
        }else if(isNaN(phno.value)){
            setTimeout(()=>{
                document.getElementById('field3').textContent = 'Please add a valid number'
                document.getElementById('field3').style.visibility = 'visible'
                phno.style.border = '1px solid red'
            },1000)
        }else{
            document.getElementById('field3').style.visibility = 'hidden'
            setTimeout(()=>{
               phno.style.border = '1px solid green'
            },1000)
            phno_true = true
        }
        if(name_true === true && email_true === true && phno_true === true){
            setTimeout(()=>{
                firstPage.style.display = 'none'
                secondPage.style.display = 'flex'
            },2000)
        }
    
})



next_two.addEventListener('click', ()=>{
    if(arcade_clicked === true || advanced_clicked === true || pro_clicked === true){
        if(yearly === true && arcade_clicked === true){
            plancost.textContent = 90
        }else if (arcade_clicked === true){
            plancost.textContent = 9
        }
        if(yearly === true && advanced_clicked === true){
            plancost.textContent = 120
        }else if (advanced_clicked === true){
            plancost.textContent = 12
        }
        if(yearly === true && pro_clicked === true){
            plancost.textContent = 150
        }else if (pro_clicked === true){
            plancost.textContent = 15
        }
        totalsss.push(plancost.textContent)
        next2= true
        console.log(totalsss)
        secondPage.style.display = 'none'
        thirdPage.style.display = 'flex'
    }
})



next_three.addEventListener('click', ()=>{
    if(next3 === true){
        if(yearly=== true){
            plancost2.textContent = 10
            plancost3.textContent = 20
            plancost4.textContent = 20
        }else{
            plancost2.textContent = 1
            plancost3.textContent = 2
            plancost4.textContent = 2
        }
        if(service_selected === true){
            document.getElementById('ads-one').style.display = 'flex'
            totalsss.push(plancost2.textContent)
        }else if(service_selected === false){
            document.getElementById('ads-one').style.display = 'none'
        }
        
        if(storage_selected === true){
            document.getElementById('ads-two').style.display = 'flex'
            totalsss.push(plancost3.textContent)
        }else if(storage_selected === false){
            document.getElementById('ads-two').style.display = 'none'
        }
        
        if(profile_selected === true){
            document.getElementById('ads-three').style.display = 'flex'
            totalsss.push(plancost4.textContent)
        }else if(profile_selected === false){
            document.getElementById('ads-three').style.display = 'none'
        }
       
        totalamt();
    
        thirdPage.style.display = 'none'
        fourthPage.style.display = 'flex'
        next3 = false
    }
    
})




next_four.addEventListener('click', ()=>{
    fourthPage.style.display = 'none'
    thanks.style.display = 'flex'
})





back_one.addEventListener('click', ()=>{
    firstPage.style.display = 'flex'
    secondPage.style.display = 'none'
})


back_two.addEventListener('click', ()=>{
    secondPage.style.display = 'flex'
    thirdPage.style.display = 'none'
})

back_three.addEventListener('click', ()=>{
    if(next3 === false){
        thirdPage.style.display = 'flex'
        fourthPage.style.display = 'none'
        next3 = true
    }
    
})


arcade.addEventListener('click', ()=>{
    arcade.style.border = '2px solid hsl(213, 96%, 18%)'
    advanced.style.border = '2px solid hsl(229, 24%, 87%)'
    pro.style.border = '2px solid hsl(229, 24%, 87%)'
    document.getElementById('plantype').textContent = 'Arcade '
    arcade_clicked = true
    advanced_clicked = false
    pro_clicked = false
})
advanced.addEventListener('click', ()=>{
    advanced.style.border = '2px solid hsl(213, 96%, 18%)'
    arcade.style.border = '1px solid hsl(229, 24%, 87%)'
    pro.style.border = '2px solid hsl(229, 24%, 87%)'
    document.getElementById('plantype').textContent = 'Advanced '
    advanced_clicked = true
    arcade_clicked = false
    pro_clicked = false
})
pro.addEventListener('click', ()=>{
    pro.style.border = '2px solid hsl(213, 96%, 18%)'
    advanced.style.border = '2px solid hsl(229, 24%, 87%)'
    arcade.style.border = '2px solid hsl(229, 24%, 87%)'
    document.getElementById('plantype').textContent = 'Pro '
    pro_clicked = true
    advanced_clicked = false
    arcade_clicked = false
})


mo_yr.addEventListener('click', ()=>{
    if(monthly === true){
        mo_yr.childNodes[0].style.cssText = 'transform:translateX(100%); transition: .3s linear'
        document.getElementById('arc').textContent = '$90/yr'
        document.getElementById('adv').textContent = '$120/yr'
        document.getElementById('pro').textContent = '$150/yr'
        document.getElementById('acc').textContent = 10
        document.getElementById('lar').textContent = 20
        document.getElementById('cus').textContent = 20
        document.getElementById('planduration').textContent = '(Yearly) '
        for(i=0; i<free.length; i++){
            free[i].style.cssText = 'visibility:visible'
        }
        for(i=0; i<moORyr.length; i++){
            moORyr[i].textContent = '/yr'
        }
        monthly = false
        yearly = true
    }else if(monthly===false){
        mo_yr.childNodes[0].style.cssText = 'transform:translateX(0%); transition: .1s linear'
        document.getElementById('arc').textContent = '$9/mo'
        document.getElementById('adv').textContent = '$12/mo'
        document.getElementById('pro').textContent = '$15/mo'
        document.getElementById('acc').textContent = 1
        document.getElementById('lar').textContent = 2
        document.getElementById('cus').textContent = 2
        document.getElementById('planduration').textContent = '(Monthly) '
        for(i=0; i<free.length; i++){
            free[i].style.cssText = 'visibility:hidden'
        }
        for(i=0; i<moORyr.length; i++){
            moORyr[i].textContent = '/mo'
        }
        monthly = true
        yearly = false
    }
    
})

// ads on

service.addEventListener('click', ()=>{
    if(service_selected===false){
        service.style.cssText = 'border: 1px solid hsl(213, 96%, 18%)'
        document.getElementById('services_img').style.background = 'hsl(213, 96%, 18%)'
        service_selected = true
    }
    else if (service_selected === true){
        service.style.cssText = 'border: 1px solid hsl(229, 24%, 87%)'
        document.getElementById('services_img').style.background = 'none'
        service_selected = false
    }
    
})


storage.addEventListener('click', ()=>{
    if(storage_selected===false){
        storage.style.cssText = 'border: 1px solid hsl(213, 96%, 18%)'
        document.getElementById('storage_img').style.background = 'hsl(213, 96%, 18%)'
        storage_selected = true
    }
    else if (storage_selected === true){
        storage.style.cssText = 'border: 1px solid hsl(229, 24%, 87%)'
        document.getElementById('storage_img').style.background = 'none'
        storage_selected = false
    }
})


profile.addEventListener('click', ()=>{
        if(profile_selected===false){
        profile.style.cssText = 'border: 1px solid hsl(213, 96%, 18%)'
        document.getElementById('profile_img').style.background = 'hsl(213, 96%, 18%)'
        profile_selected = true
    }
    else if (profile_selected === true){
        profile.style.cssText = 'border: 1px solid hsl(229, 24%, 87%)'
        document.getElementById('profile_img').style.background = 'none'
        profile_selected = false
    }
})

// finishing 

let total = document.getElementById('total')

function totalamt(){
    if(service_selected === true && storage_selected === true && profile_selected === true){
        total.textContent = Number(totalsss[3]) + Number(totalsss[1]) + Number(totalsss[2]) + Number(totalsss[0])
    }
    else if(service_selected === true && storage_selected === true ){
        total.textContent = Number(totalsss[1]) + Number(totalsss[2]) + Number(totalsss[0])
    }else if(service_selected === true && profile_selected === true){
        total.textContent = Number(totalsss[1]) + Number(totalsss[2]) + Number(totalsss[0])
    }
    else if(storage_selected === true && profile_selected=== true){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1]) + Number(totalsss[2])
    }
    else if(service_selected === true || storage_selected === true || profile_selected === true){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1])
    }
    else if(service_selected === false && storage_selected === false && profile_selected === false){
        total.textContent = Number(totalsss[0])
    }else if(service_selected === false && storage_selected === false ){
        total.textContent = Number(totalsss[1]) + Number(totalsss[0])
    }else if(storage_selected === false && profile_selected=== false){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1])
    }else if(service_selected === true && storage_selected === false && profile_selected === false){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1])
    }else if(service_selected === false && storage_selected === true && profile_selected === false){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1])
    }else if(service_selected === false && storage_selected === true && profile_selected === true){
        total.textContent = Number(totalsss[0]) + Number(totalsss[1])
    }
}


