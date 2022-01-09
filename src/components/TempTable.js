const TempTable = ({ messages, utime }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <td><b>topic</b></td>
            <td><b>temp</b></td>
          </tr>
        </thead>
        <tbody>
          {Array.from(messages).map(([key, value], index) => (
            <tr key={index}>
              <td>{key}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td><em>updated:</em></td>
            <td key={utime}><em>{utime}</em></td>
          </tr>
        </tfoot>
      </table>
    </div>
  )
}

export default TempTable