import React from 'react';
import Uploaders from './Uploaders'


const Files = (props) => {
    const id = props.id
    const ruta = props.ruta
  return (
    <>
      <div className="container pt-5">
        <div className="row">
          <div className="col-md-8 col-sm-12 mx-auto">
            <div className="card">
              <div className="card-header">
                <h3 className="text-primary font-weight-bold">
                  Seleccione Archivos
                  </h3>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-12">
                    <Uploaders
                      uploadUrl= {ruta}
                      label="Subir archivos"
                      id="single-uploder"
                      _id={id}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-12 pr-2">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Files;