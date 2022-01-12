var express    = require('express');        
var app        = express();               
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;        
var router = express.Router();  

//meta data
const NFT =   [
    {
        attributes: [
          {
            trait_type: "Breed",
            value: "Uchiha"
          },
          {
            trait_type: "Eye color",
            value: "red"
          }
        ],
        description: "The world's greatest Shinobi.",
        image: "https://gateway.pinata.cloud/ipfs/Qmcy1NtKnpeduKDFXjLGHnqTa6kN4tzQ8ekUsMVHysf8Qj",
        name: "Madara"
      }
]      
//routes

router.get('/', function(req, res) {
    res.send('hooray! welcome to our api!' );
});
router.get('/nft', function(req, res) {
    console.log(NFT);
    res.send(NFT);
});

router.post('/nft', function(req, res) {    
    var nft = req.body;
    console.log (req.body);
    NFT.push(nft);
    res.send('NFT Metadata added');
});


app.use('/api', router);
app.listen(port);
console.log('listening on port ' + port);