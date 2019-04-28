import swal from 'sweetalert';

const CopyButtonHandler = (textToCopy) => {
    navigator.clipboard.writeText(textToCopy)
        .then(function () {
            swal("Coppied to clipboard successfully!", "", "success", {
                button: false,
            });
        })
        .catch(err => console.log(err));
}

export default CopyButtonHandler;