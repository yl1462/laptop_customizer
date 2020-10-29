import React from 'react';
import Total from './Total'
import SummaryOption from './SummaryOption'

const Summary = (props) => {

  const summary = Object.keys(props.selected).map((feature, idx) => (<SummaryOption
    feature={feature}
    idx={idx}
    selected={props.selected}
  />
  ))

  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {summary}
      <Total
        selected={props.selected}
      />
    </section>
  )
}



export default Summary;