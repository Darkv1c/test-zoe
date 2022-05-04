import { createAsyncThunk } from "@reduxjs/toolkit";
import { characters } from '../types/character'
import axios from "axios";

export const getCharacters = createAsyncThunk(
    'character/getCharacters',
    async () => {
        let response = null
        await axios.get("https://rickandmortyapi.com/api/character")
            .then(({data}:{data:characters}) => {
                response = data
            })
            .catch(e => {throw e})
        return response
    }
)