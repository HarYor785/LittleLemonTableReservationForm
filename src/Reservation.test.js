import { render, fireEvent, screen } from '@testing-library/react';
import Reservation from './components/Reservation';


test('it should render the reservation form', ()=>{
    render(<Reservation/>)
    expect(screen.getByText('Date')).toBeInTheDocument()
    expect(screen.getByText('Time')).toBeInTheDocument()
    expect(screen.getByText('Adults')).toBeInTheDocument()
    expect(screen.getByText('Children')).toBeInTheDocument()
    expect(screen.getByText('Firstname')).toBeInTheDocument()
    expect(screen.getByText('Lastname')).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText('Special Guests')).toBeInTheDocument()
    expect(screen.getByText('SUBMIT')).toBeInTheDocument()
})

test('it should handle user input and form submission',() =>{
    render(<Reservation/>)

    fireEvent.change(screen.getByText('Date'), {target: {value: '2023-10-10'}})
    fireEvent.change(screen.getByText('Time'), {target: {value: '9:30 PM'}})
    fireEvent.change(screen.getByText('Adults'), {target: {value: '2'}})
    fireEvent.change(screen.getByText('Children'), {target: {value: '3'}})
    fireEvent.change(screen.getByText('Firstname'), {target: {value: 'ayo'}})
    fireEvent.change(screen.getByText('Lastname'), {target: {value: 'bami'}})
    fireEvent.change(screen.getByText('Email'), {target: {value: 'ayobami@gmail.com'}})
    fireEvent.change(screen.getByText('Phone'), {target: {value: '8124823198'}})
    fireEvent.change(screen.getByText('Special Guests'), {target: {value: 'Mr. Oluwafemi'}})

    fireEvent.click(screen.getByText('SUBMIT'))

    expect(screen.getByText('Your Reservation Requirements was Succesfully Submitted!')).toBeInTheDocument()
})