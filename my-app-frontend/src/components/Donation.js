
import Dropdown from 'react-bootstrap/Dropdown';

function Donation({donation, categories, handleDeleteDonation, onUpdateDonation}) {
    const cat = categories.filter((categorie) => categorie.id == donation.categorie_id)

    // delete donation
    function handleDelete(){
        fetch(`http://localhost:9292/donations/${donation.id}`, {
        method: "DELETE",
    });
    handleDeleteDonation(donation.id)
    }

    //update donation # patch #
    function handleEdit(){
        fetch(`http://localhost:9292/donations/${donation.id}`,{
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                comment: "weekly",
                amount: donation.amount,
              }),
        })
        .then((r) => r.json())
        .then((updatedDonation) => onUpdateDonation(updatedDonation));
    }
    
    return (
        
            <tbody>
                <tr>
                    <td>#{donation.id}</td>
                    <td>{cat[0].name}</td>
                    <td>${donation.amount} </td>
                    <td>{donation.comment}</td>
                    <td>
                        <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic">
                                Choose Action
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1" onClick={handleEdit}>Edit</Dropdown.Item>
                                <Dropdown.Item href="#/action-2" onClick={handleDelete}>Delete</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </td>
                </tr>
            </tbody>
    );
}
export default Donation;


