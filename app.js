const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;        
const router = express.Router();  

//meta data
const NFT = {
    "attributes": [
      {
        "trait_type": "Breed",
        "value": "Maltipoo"
      },
      {
        "trait_type": "Eye color",
        "value": "Mocha"
      }
    ],
    "description": "The world's greatest Shinobi.",
    "image": "https://gateway.pinata.cloud/ipfs/Qmcy1NtKnpeduKDFXjLGHnqTa6kN4tzQ8ekUsMVHysf8Qj",
    "name": "Madara"
  }
  ;
//routes
app.use(express.static(__dirname+'/api'));
router.get('/', function(req, res) {
    res.send('Welcome to our Home!' );
});
//route to nft meta data
router.get('/nft', function(req, res) {
    console.log(NFT);
    res.send(NFT);
});
//test post using postman
router.post('/nft', function(req, res) {    
    var nft = req.body;
    console.log (req.body);
    NFT.push(nft);
    res.send('NFT Metadata added');
});


app.use('/api', router);
app.listen(port);
console.log('listening on port ' + port);