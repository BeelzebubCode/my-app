import Modal from "@/components/MyModal"

export default function ModalPage() {
    return (
        <>
            <div className="p-5">
                <button 
                    className="btn btn-primary" 
                    data-bs-toggle="modal"
                    data-bs-target="#modalExample"
                >
                    click for open modal
                </button>

                <Modal id="modalExample" title="this is title">
                    <p>This is content</p>
                </Modal>
            </div>
        </>
    )
}