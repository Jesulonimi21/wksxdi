
import IPFS from 'ipfs-api';
let ipfs=new IPFS({host:"ipfs.infura.io",port:5001,protocol:"https"});
export default ipfs;