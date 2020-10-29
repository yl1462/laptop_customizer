import React from 'react';
import FeatureOption from './FeatureOption'
import FEATURES from './data'



const Feature = (props) => {
  const features = Object.keys(FEATURES).map((feature, idx) => {
    const featureHash = feature + '-' + idx;
    
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{feature}</h3>
        </legend>
        <FeatureOption
          feature={feature}
          features={FEATURES}
          updateFeature={props.updateFeature}
          selected={props.selected}
        />
      </fieldset>
    );
  });

  return (
    <form className="main__form">
      <h2>Customize your laptop</h2>
      {features}
    </form>
  )
}

export default Feature