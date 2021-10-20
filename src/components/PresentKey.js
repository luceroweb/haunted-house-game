import ShowKey from './ShowKey';
//import KeyDisplay from './KeyDisplay';

function PresentKey(props) {
    
    
    return (
        <div className="btn-wrap">
            <button className="presentKey" onClick={ShowKey}>Present Key</button> 
        </div>
    )
}

export default PresentKey;
