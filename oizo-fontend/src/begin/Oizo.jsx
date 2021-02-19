import React, { Component,
  Suspense } from "react";
import { withTranslation } from 'react-i18next';




class Oizo extends Component {
  render() {

    const { t } = this.props;


    return (
      <div style={{
        backgroundColor: 'white',}}>
        <br />
        <div className="card col-md-6 offset-md-3" style={{
        backgroundColor: 'pink',}}>
            <br />
            <br />
          
          <br />
          <br />
          <h3 className="text-center">icon</h3>
          <br />
          <br />
          <br />
          <h1 className="text-center">
    <letter style={{color: 'blue'}}>
    o
    <letter style={{color: 'orange'}}>
       i
       <letter style={{color: 'green'}}>
           z
           <letter style={{color: 'red'}}>
               o</letter>
       </letter>
    </letter>
</letter></h1>
          <br />
          <br />
          <br />
          <p>
            <h3>{t('Thanks.1')}</h3>  <h3>{t('Why.1')}</h3> 
          </p>
          <br />
          <br />
          <br />
          <br />
          <br />
          <button type="button" class="btn btn-light">
            {" "}
            {t('Enterprise.1')}{" "}
          </button>
          <br />
          <br />
          <button type="button" class="btn btn-light">
            {" "}
            particular{" "}
          </button>
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}

const MyComponent = withTranslation()(Oizo)

// i18n translations might still be loaded by the http backend
// use react's Suspense
export default function App() {
  return (
    <Suspense fallback="loading">
      <MyComponent />
    </Suspense>
  );
}
;
