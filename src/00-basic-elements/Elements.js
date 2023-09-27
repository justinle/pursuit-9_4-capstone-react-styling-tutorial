import './styles.scss'

const BasicElements = () => {
  return (
    <div>
      <h2>Margin & Padding</h2>
      <div className="basic-element">
        <p>This element has 16px margins and 8px padding.</p>
        <p>Notice that the <code>border</code> and <code>background-color</code> is applied within the padding but not between the padding and the margin.</p>
      </div>
    </div>
  )
}

export default BasicElements
