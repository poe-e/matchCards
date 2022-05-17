
//Combine and shuffle two arrays
const shuffle = () => {
    const assets = [
        { image: '/assets/bete.png'},
        { image: '/assets/jake.png'},
        { image: '/assets/jib.png'},
        { image: '/assets/nick.png'},
        { image: '/assets/owen.png'},
        { image: '/assets/peg.png'},
        { image: '/assets/poe.png'},
        { image: '/assets/matt.png'},
    ];

    /*
    Pass in each object of array
    then ...card to copy each key:value pair and add , id: Math.random to each card
    const doneArr = [...assets].sort(()=> Math.random - 0.5);
    console.log(doneArr)
    doneArr.map((card)=>{
        console.log(card);
        newArr = {...card, id:Math.random()}
        console.log(newArr)
    })
    */
    return [...assets, ...assets].sort(()=> Math.random() - 0.5).map((card) => ({ ...card, id: Math.random()}));
};

export default shuffle;
