/* ---------------------------------desplegar el navbar */
function navSlide(){
    if(window.innerWidth<800){
        const header=document.getElementById('header');
        const navBar=document.getElementById('navBar');
        navBar.classList.toggle('slide');
        header.classList.toggle('navSlide')
    }
}

/* -----------------------------------desplegar testimonios */
let closeAttestation=true;
function slideAttestation(){
    if(window.innerWidth<1000){
        const Attestation=document.getElementById('Attestation');
        const btnAttestation=document.getElementById('btn_attestation');
        const height=Attestation.scrollHeight+100;
        if(closeAttestation){
            Attestation.style.maxHeight=`${height}px`;
            btnAttestation.style.position='static';
        }
        else{
            Attestation.style.maxHeight='440px';
            btnAttestation.style.position='absolute';
        }
        closeAttestation=!closeAttestation;
    }
}