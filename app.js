const express    = require('express');        
const app        = express();               
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;        
const router = express.Router();  

//meta data
const NFT =  {
    "title": "Madara Uchihia",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Madara"
        },
        "description": {
            "type": "string",
            "description": "World greatest shinobi"
        },
        "image": {
            "type": "string",
            "description": "https://gateway.pinata.cloud/ipfs/Qmcy1NtKnpeduKDFXjLGHnqTa6kN4tzQ8ekUsMVHysf8Qj"
        }
    }
}
//routes
app.use(express.static(__dirname+'/api'));
router.get('/', function(req, res) {
    res.send('Welcome to our api!' );
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