import React, { useState } from 'react'
import { FaTrashAlt,FaUserEdit} from 'react-icons/fa';
import { Container, Row, Table, Col, InputGroup, FormControl, Button, Form, ButtonGroup } from 'react-bootstrap';

function Dashannuaire() {
    const [tabRegistre, setTabRegistre] = useState([]);
    const [name, setName] = useState("");
    const [prenom, setPrenom] = useState("");
    const [sexe, setSexe] = useState("");
    const [profession, setProfession] = useState("");
    const [number, setNumber] = useState("");
    const [mailp, setMailp] = useState("");
    const [indexRe, setIndexRe] = useState(null);

    const handleEnregistrer = (e) => {
        if (name === "") {
            alert(`Veuillez renseigner votre nom s'il vous plaît !`);
            return false;
        }
        if (prenom === "") {
            alert(`Veuillez renseigner votre prenom s'il vous plaît !`);
            return false;
        }
        if (sexe === "") {
            alert(`Veuillez renseigner votre sexe s'il vous plaît !`);
            return false;
        }
        if (profession === "") {
            alert(`Veuillez renseigner votre profession s'il vous plaît !`);
            return false;
        }
        if (number === "") {
            alert(`Veuillez renseigner votre numéro s'il vous plaît !`);
            return false;
        }
        if (mailp === "") {
            alert(`Veuillez renseigner votre e-mail s'il vous plaît !`);
            return false;
        }
        if (!isNumber(number)) {
            alert('Numéro non valide');
        }
        function isNumber(valeur) {
            const value = parseInt(valeur)
            let isNumber = true;
            if (isNaN(value)) {
                isNumber = false;
            }
            return isNumber;

        }

        if (indexRe === null) {
            let registre = [...tabRegistre];
            registre.push({ id: Date.now(), nom: name, nompre: prenom, sexep: sexe, baara: profession, num: number, adressMail: mailp });
            setTabRegistre([...registre]);
            setName("");
            setPrenom("");
            setSexe("");
            setProfession("");
            setNumber("");
            setMailp("");
            setIndexRe(null)
            console.log(registre);

        }

        else if (indexRe >= 0) {
          
            let updateRegistre = tabRegistre.find((vueRegistre, id) => vueRegistre.id === Number(indexRe));
            let updateCache = tabRegistre.findIndex((vueRegistre, id) => vueRegistre.id === Number(indexRe))
            updateRegistre = { ...updateRegistre, nom: name, nompre: prenom, sexep: sexe, baara: profession, num: number, adressMail: mailp };
            let registre = [...tabRegistre];
            registre[updateCache] = updateRegistre;
            setTabRegistre([...registre]);
            setName("");
            setPrenom("");
            setSexe("");
            setProfession("");
            setNumber("");
            setMailp("");
            setIndexRe(null);
            console.log(registre);
        }
    }
    const handleRemov = (e) => {
        e.preventDefault();
        let removRegistre = tabRegistre.filter((vueRegistre, id) => vueRegistre.id !== Number(e.currentTarget.id));
        setTabRegistre([...removRegistre]);
        setName("");
        setPrenom("");
        setSexe("");
        setProfession("");
        setNumber("");
        setMailp("");
        setIndexRe(null);
    }
    const handleUp = (e) => {
        e.preventDefault();
        let updateRegistre = tabRegistre.find((vueRegistre, id) => vueRegistre.id === Number(e.currentTarget.id));
        setIndexRe(Number(e.currentTarget.id));
        setName(updateRegistre.nom);
        setPrenom(updateRegistre.nompre);
        setSexe(updateRegistre.sexep);
        setProfession(updateRegistre.baara);
        setNumber(updateRegistre.num);
        setMailp(updateRegistre.adressMail);
        console.log(updateRegistre.nom);
    }


    return (
        <div style={{ marginTop: '30px' }}>
            <Container fluid>
                <Row>
                    <Col xs={3}>
                        <>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Entrez un nom"
                                    aria-describedby="basic-addon1"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    pattern="[A-Za-z]+"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    placeholder="Entrez un prenom"
                                    aria-describedby="basic-addon2"
                                    value={prenom}
                                    onChange={(e) => setPrenom(e.target.value)}
                                    pattern="[A-Za-z]+"
                                />
                            </InputGroup>
                            <div>
                                <Form.Select aria-label="Default select example"
                                    value={sexe}
                                    onChange={(e) => setSexe(e.target.value)}
                                >
                                    <option value="">Choisissez votre sexe</option>
                                    <option value="Homme">Homme</option>
                                    <option value="Femme">Femme</option>
                                </Form.Select>
                            </div>
                            <InputGroup className="mb-3" style={{ marginTop: '12px' }}>
                                <FormControl id="basic-url"
                                    aria-describedby="basic-addon3"
                                    placeholder="Profession"
                                    value={profession}
                                    onChange={(e) => setProfession(e.target.value)}
                                    pattern="[A-Za-z]+"
                                />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type='text'
                                    aria-label="Amount (to the nearest dollar)"
                                    placeholder="Numéro Tel"
                                    value={number}
                                    onChange={(e) => setNumber(e.target.value)} />
                            </InputGroup>
                            <InputGroup className="mb-3">
                                <FormControl
                                    type='text'
                                    aria-label="Amount (to the nearest dollar)"
                                    placeholder="E-mail"
                                    value={mailp}
                                    onChange={(e) => setMailp(e.target.value)} />
                            </InputGroup>
                        </>
                        <div>
                            <Button variant="outline-primary" onClick={handleEnregistrer}> {indexRe !== null ? 'Edité' : 'Creer'}</Button>
                        </div>
                    </Col>

                    <Col xs={9} >
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Recherchez une personne"
                                aria-describedby="basic-addon2"
                            />
                            <Button variant="secondary" id="button-addon2">
                           Search
                            </Button>
                        </InputGroup>
                        <Table striped bordered hover responsive="sm" >
                            <thead>
                                <tr>
                                    <th style={{ width: '50px', textAlign: 'center' }}>N°</th>
                                    <th style={{ textAlign: 'center' }}>Nom</th>
                                    <th style={{ textAlign: 'center' }}>Prenom</th>
                                    <th style={{ textAlign: 'center' }}>Sexe</th>
                                    <th style={{ textAlign: 'center' }}>Profession</th>
                                    <th style={{ textAlign: 'center' }}>Téléphone</th>
                                    <th style={{ width: '250px', textAlign: 'center' }}>E-mail</th>
                                    <th style={{ textAlign: 'center' }}>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {

                                    tabRegistre.map((vueRegistre, index) => {
                                        return <tr key={vueRegistre.id} style={{ textAlign: 'center', width: '50px' }}>
                                            <td style={{ textAlign: 'center' }}>{index + 1}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.nom}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.nompre}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.sexep}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.baara}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.num}</td>
                                            <td style={{ textAlign: 'center' }}>{vueRegistre.adressMail}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <ButtonGroup aria-label="Basic example">
                                                    <a style={{color:'black'}} href="" id={vueRegistre.id} onClick={handleUp} variant="light"><FaUserEdit/></a> &nbsp; &nbsp;
                                                    <a style={{color:'black'}} href="" id={vueRegistre.id} onClick={handleRemov} variant="light"> <FaTrashAlt/></a>
                                                </ButtonGroup>
                                            </td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Dashannuaire
