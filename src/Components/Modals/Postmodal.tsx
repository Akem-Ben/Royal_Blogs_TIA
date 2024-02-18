import { Form, Button, Modal } from "react-bootstrap";
import './postmodal.css'

interface Props {
    onClose: () => void;
    children?: React.ReactNode;
    onClick: () => void;
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
    titleChange: (e:React.ChangeEvent<HTMLInputElement>) => void
  }

const Postmodal = (Props: Props) => {


  return (
    <>
      <div
        className="modal show"
        style={{
          display: "flex",
          position: "fixed",
          justifyContent: "center",
          alignItems: "items",
          alignContent: "center",
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          style={{
            display: "flex",
            width: "60%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Modal.Dialog style={{ width: "100%" }}>
            <div style={{ marginTop: "10px" }}>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Form.Group className="mb-3" style={{ width: "90%" }}>
                  <Form.Label>Post Title</Form.Label>
                  <Form.Control type="text" onChange={Props.titleChange}/>
                  {/* <Form.Label style={{ marginTop: "10px" }}>
                    Post Cover Image
                  </Form.Label>
                  <Form.Control type="file" /> */}
                </Form.Group>
              </div>
            </div>
            <Modal.Body>
              <textarea
                onChange={Props.onChange}
                style={{
                  width: "100%",
                  height: "300px",
                  border: "1px gray solid",
                  borderRadius: "10px",
                  padding: "10px",
                }}
              />
            </Modal.Body>

            <Modal.Footer 
            style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}
            >
              <Button className="post_btn" style={{backgroundColor: 'green'}} variant="secondary" onClick={Props.onClose}>Close</Button>
              <Button className="post_btn" style={{backgroundColor: 'green'}} variant="primary" onClick={Props.onClick}>Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    </>
  );
};

export default Postmodal;
