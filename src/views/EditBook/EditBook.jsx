import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header'
import "./index.scss"
import { useParams } from 'react-router-dom'
import { BookService } from '../../api/BookService'

const EditBook = () => {
    let { bookId } = useParams();

    const [book, setBook] = useState([])

    async function getBook() {
        const { data } = await BookService.getBook(bookId);
        setBook(data)
    }

    async function editBook() {
        const body = {
            id: Number(book.id),
            title: book.title,
            pageNumbers: Number(book.pageNumbers),
            isbn: book.isbn,
            publishCompany: book.publishCompany
        }
        if (book.id != undefined && book.id != '' && book.title != undefined && book.title != '' && book.pageNumbers != undefined && book.pageNumbers != '' && book.isbn != undefined && book.isbn != '' && book.publishCompany != undefined && book.publishCompany != '') {
            await BookService.updateBook(Number(book.id), body)
                .then(({ data }) => {
                    alert('Informações atualizadas com sucesso!');
                    // alert(data.message)
                })
                .catch(({ response: { data, status } }) => {
                    alert(`${status} - ${data}`)
                });
        }

    }

    useEffect(() => {
        getBook()
    }, [])

    return (
        <>
            <Header />
            <div className='livrosCadastro'>
                <h1>Edição de Livros</h1>
                <div>
                    <form id="formulario">
                        <div className='form-group'>
                            <label>Id</label>
                            <input type="text" disabled required onChange={(event) => { setBook({ ...book, id: event.target.value }) }} value={book.id || ''}></input>
                        </div>
                        <div className='form-group'>
                            <label>Titulo</label>
                            <input type="text" required onChange={(event) => { setBook({ ...book, title: event.target.value }) }} value={book.title || ''} ></input>
                        </div>
                        <div className='form-group'>
                            <label>Número de Páginas</label>
                            <input type="text" required onChange={(event) => { setBook({ ...book, pageNumbers: event.target.value }) }} value={book.pageNumbers || ''}></input>
                        </div>
                        <div className='form-group'>
                            <label>ISBN</label>
                            <input type="text" required onChange={(event) => { setBook({ ...book, isbn: event.target.value }) }} value={book.isbn || ''}></input>
                        </div>
                        <div className='form-group'>
                            <label>Editora</label>
                            <input type="text" required onChange={(event) => { setBook({ ...book, publishCompany: event.target.value }) }} value={book.publishCompany || ''}></input>
                        </div>
                        <div className='form-group'>
                            <button onClick={() => {
                                event.preventDefault()
                                editBook()
                            }}>Atualizar Livro</button>
                        </div>
                    </form>
                </div>
            </div>
        </>)

}

export default EditBook