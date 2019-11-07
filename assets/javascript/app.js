const firebaseConfig = {
apiKey: "AIzaSyDHTBkbZBnyqTui3WPd6TfbYm9P4YmrSEg",
authDomain: "operation-t-a-s-k-3ff16.firebaseapp.com",
databaseURL: "https://operation-t-a-s-k-3ff16.firebaseio.com",
projectId: "operation-t-a-s-k-3ff16",
storageBucket: "operation-t-a-s-k-3ff16.appspot.com",
messagingSenderId: "103599166251",
appId: "1:103599166251:web:7b8f0cb7116749241dab6e",
measurementId: "G-8507VK2V5L"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


const database  = firebase.database();




// THIS IS A TEMPLATE FOR AN API CALL. IE: NATIONAL ARCHIVES!
function exampleCall(topicInput){

    let search = topicInput;

    const queryURL = `https://catalog.archives.gov/api/v1/?${search}`;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
        for(let i = 0; i < 10; i++){

        //     const imgURL = response.data[i].images.fixed_height_still.url;
        //     const image = $("<img>");
        //     image.attr("src", imgURL);
        //     image.attr("alt", i);
        //     image.attr("data-state", "still");
        //     image.attr("data-still", imgURL);
        //     image.attr("data-animate", response.data[i].images.fixed_height.url);
        //     // image.attr("data-animate", `${response.data[i].embed_url} + `);



        

        }
        
        

    });
    
}






