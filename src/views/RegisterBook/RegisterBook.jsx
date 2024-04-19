import { useState } from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import { BookService } from '../../api/BookService'

const RegisterBook = () => {

    const [book, setBook] = useState([])

    async function createBook() {
        const body = {
            id: Number(book.id),
            title: book.title,
            pageNumbers: Number(book.pageNumbers),
            isbn: book.isbn,
            publishCompany: book.publishCompany
        }
        if (book.id != undefined && book.id != '' && book.title != undefined && book.title != '' && book.pageNumbers != undefined && book.pageNumbers != '' && book.isbn != undefined && book.isbn != '' && book.publishCompany != undefined && book.publishCompany != '') {
            await BookService.createBook(body)
                .then((response) => {
                    alert('Livro cadastrado com sucesso!');
                    // alert(response.data);
                    document.getElementById('formulario').reset();
                })
                .catch(({ response: { data, status } }) => {
                    alert(`${status} - ${data}`);
                });
        }

    }

    return (
        <>
            <Header />
            <div className='livrosCadastro'>
                <h1>Cadastro de Livros</h1>
                <div>
                    <form id="formulario">
                        <div className='form-group'>
                            <label>Id</label>
                            <input type="text" id='id' required onChange={(event) => { setBook({ ...book, id: event.target.value }) }} ></input>
                        </div>
                        <div className='form-group'>
                            <label>Titulo</label>
                            <input type="text" id='titulo' required onChange={(event) => { setBook({ ...book, title: event.target.value }) }}></input>
                        </div>
                        <div className='form-group'>
                            <label>Número de Páginas</label>
                            <input type="text" id='num' required onChange={(event) => { setBook({ ...book, pageNumbers: event.target.value }) }}></input>
                        </div>
                        <div className='form-group'>
                            <label>ISBN</label>
                            <input type="text" id='isbn' required onChange={(event) => { setBook({ ...book, isbn: event.target.value }) }}></input>
                        </div>
                        <div className='form-group'>
                            <label>Editora</label>
                            <input type="text" id='editora' required onChange={(event) => { setBook({ ...book, publishCompany: event.target.value }) }}></input>
                        </div>
                        <div className='form-group'>
                            <button onClick={() => {
                                event.preventDefault()
                                createBook()
                            }}>Cadastrar Livro</button>
                        </div>
                    </form>
                </div>
            </div>
        </>)

}

export default RegisterBook