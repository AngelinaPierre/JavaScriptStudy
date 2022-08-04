
// function init() {
//     let isValid = true;
//     console.log('init modal')
// }
// init();

(function(){
    let isValid = true;
    console.log('modal + isValid:', isValid);

    function init(){
        console.log('init modal');
        console.log('init modal + isValid:',isValid);
    }
    init();
})();