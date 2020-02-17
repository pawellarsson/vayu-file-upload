import React, { useState } from 'react'
//import { remote } from 'electron'
import Button from './Button'

const googleApi = `https://storage.googleapis.com/upload/storage/v1/b/gyana-vayu/o?uploadType=media&name=[OBJECT_NAME]`

const FileConnectorBlock: React.FC = () => {
  const [block, setBlock] = useState<{ name: string; location: string }>({ name: '', location: '' })
  /*const onClick = async () => {
    const { filePaths: files } = await remote.dialog.showOpenDialog({
      properties: ['openFile'],
      filters: [
        { name: 'All supported files', extensions: ['xlsx', 'xls', 'csv'] },
        { name: 'Delimited text (.csv)', extensions: ['csv'] },
        { name: 'Spreadsheet (.xls, .xlsx)', extensions: ['xlsx', 'xls'] }
      ]
    })
  }*/

  /*const fileUpload = file => {
    try {
      fetch()
    }
    catch (err) { console.warn(err) }
  }*/


  return (
    <div className="flex flex-row w-100">
      <div className="flex items-center" style={{ flex: '1 1 auto' }}>
        <div className={`flex flex-column w-100 pa2 outline-0`} tabIndex={-1}>
          <div className={`w-100 flex flex-row mv1 items-center ph2 justify-between`}>
            <div className="flex flex-row">
              <span className="f5 mr2">
                <strong>File: </strong>
              </span>
              <form action="https://storage.googleapis.com/gyana-vayu" method="post" encType="multipart/form-data">
                <label htmlFor="file-upload">click</label>
                <input type="file" name="file-upload" id="file-upload" accept=".xlsx,.xls.csv" /*onClick={e => fileUpload(e.target)}*/ />
                <input type="submit" id="submit" />
              </form>

              {/*(block.name && (
                <div
                  contentEditable={true}
                  onChange={value => {
                    setBlock({ ...block, name: value + '' })
                  }}
                >
                  {block.name}
                </div>
              )) || (
                <Button size="xs" onClick={onClick}>
                  Connect
                </Button>
              )*/}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default FileConnectorBlock
