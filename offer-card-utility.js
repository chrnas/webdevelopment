function expandLeftOfferCard(){
    if (!document.getElementById("left-offercard-ingredients")){
        const descriptionElement = document.createElement("p");
        descriptionElement.id = "left-offercard-ingredients";
        descriptionElement.innerHTML = getLeftOfferCardDescription();
        const offerCardElement = document.getElementById("left-offercard-description");
        offerCardElement.appendChild(descriptionElement)
    }
}

function expandRightOfferCard(){
    if (!document.getElementById("right-offercard-ingredients")){
        const descriptionElement = document.createElement("p");
        descriptionElement.id = "right-offercard-ingredients";
        descriptionElement.innerHTML = getRightOfferCardDescription();
        const offerCardElement = document.getElementById("right-offercard-description");
        offerCardElement.appendChild(descriptionElement)
    }
}

function collapseLeftOfferCard(){
    description = document.getElementById("left-offercard-ingredients")
    if (description){
        const offerCardElement = document.getElementById("left-offercard-description");
        offerCardElement.removeChild(description);
    }
}

function collapseRightOfferCard(){
    description = document.getElementById("right-offercard-ingredients")
    if (description){
        const offerCardElement = document.getElementById("right-offercard-description");
        offerCardElement.removeChild(description);
    }
}


const getLeftOfferCardDescription = () => " En klassisk pizza med tomatsås, mozzarella och färsk basilika – enkel och smakrik.";

const getRightOfferCardDescription = () => "En pizza med tomatsås, mozzarella och skinka – en fyllig och härlig favorit!";