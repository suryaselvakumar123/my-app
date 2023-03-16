import logo from './logo.svg';
import './App.css';




function App() {
  return (
    <div className='App'>
      <PricingPlan
        name='FREE'
        price='0'
        feature1='✔ Single User'
        feature2='✔ 5GB Storage'
        feature3='✔ Unlimited Public Projects'
        feature4='✔ Community Access'
        feature5='✘ Unlimited Private Projects'
        feature6='✘ Dedicated Phone Support'
        feature7='✘ Free Subdomain'
        feature8='✘ Monthly Status Reports'
      />
      <PricingPlan
        name='PLUS'
        price='9'
        feature1='✔ Five User'
        feature2='✔ 50GB Storage'
        feature3='✔ Unlimited Public Projects'
        feature4='✔ Community Access'
        feature5='✔ Unlimited Private Projects'
        feature6='✔ Dedicated Phone Support'
        feature7='✔ Free Subdomain'
        feature8='✘ Monthly Status Reports'
      />
      <PricingPlan
        name='PRO'
        price='49'
        feature1='✔ Unlimited User'
        feature2='✔ 1500GB Storage'
        feature3='✔ Unlimited Public Projects'
        feature4='✔ Community Access'
        feature5='✔ Unlimited Private Projects'
        feature6='✔ Dedicated Phone Support'
        feature7='✔ Unlimited Free Subdomain'
        feature8='✔ Monthly Status Reports'
      />
    </div>
  );
}


export default App;


function PricingPlan(props) {
  
  return (
    <div className='ak'>
       <h4 style={{ opacity: 0.1 }}>{props.name}</h4> 
      <h1>${props.price}/<span className='f1'>month</span></h1>
      <hr></hr>
      <ul>
        <li>{props.feature1}</li>
        <li>{props.feature2}</li>
        <li>{props.feature3}</li>
        <li>{props.feature4}</li>
        <li className={props.feature5 === '✘ Unlimited Private Projects' ? 'wrong-mark' : ''}>{props.feature5}</li>
        <li className={props.feature6 === '✘ Dedicated Phone Support' ? 'wrong-mark' : ''}>{props.feature6}</li>
        <li className={props.feature7 === '✘ Free Subdomain' ? 'wrong-mark' : ''}>{props.feature7}</li>
        <li className={props.feature8 === '✘ Monthly Status Reports' ? 'wrong-mark' : ''}>{props.feature8}</li>
      </ul>
      <button>BUTTON</button>
      
    </div>
  );
}


