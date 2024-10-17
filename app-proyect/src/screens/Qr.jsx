import { useState } from 'react';
import QRCode from 'react-qr-code';
import { Navbar } from '../components';
import { Menu } from '../components';

function Generador() {
  const [formData, setFormData] = useState({
    id_mobiliario: '',
    id_persona: '',
    ubicacion: '',
  });
  const [qrCodeValue, setQRCodeValue] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const generateQRCode = () => {
    setQRCodeValue(JSON.stringify(formData));
  };

  return (
    <>
      <Navbar />
      <Menu nombre="Generar Qr" usuario="Angelito" />

      <div className="content-wrapper">
        <section className="content">
          <div className="row">
            <div className="col-4">
              <div className="card-primary">
                <div className="card-header">
                  <h4 className="card-title">Generar Qr</h4>
                </div>

                <div className="card-body">
                  <form>
                    <div className="form-group">
                      <label>Id Mobiliario</label>
                      <input
                        className="form-control"
                        name="id_mobiliario"
                        value={formData.id_mobiliario}
                        onChange={handleChange}
                        placeholder="NX02145"
                      />
                    </div>

                    <div className="form-group">
                      <label>Id Persona</label>
                      <input
                        className="form-control"
                        name="id_persona"
                        value={formData.id_persona}
                        onChange={handleChange}
                        placeholder="12345"
                      />
                    </div>

                    <div className="form-group">
                      <label>Ubicacion</label>
                      <input
                        className="form-control"
                        name="ubicacion"
                        value={formData.ubicacion}
                        onChange={handleChange}
                        placeholder="Centro"
                      />
                    </div>
                  </form>
                </div>
                <div className="card-footer">
                  <button className="btn btn-secondary">Cancelar</button>
                  <button className="btn btn-lg float-right btn-primary" onClick={generateQRCode}>
                    Generar
                  </button>
                </div>
              </div>
            </div>

            {qrCodeValue && (
              <div className="col-8 d-flex justify-content-center align-items-center">
                <div className="card-success">
                  <div className="card-header">
                    <h4 className="card-title">Código QR Generado</h4>
                  </div>
                  <div className="card-body">
                    <QRCode value={qrCodeValue} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Generador;
