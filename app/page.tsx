"use client"
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Stack from '@mui/material/Stack';
import Select, { SelectChangeEvent } from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles'
import { MdDownload } from "react-icons/md";
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [moments, setMoments] = useState('');
  const [validation, setValidation] = useState('');
  const [image, setImage] = useState(null);

  const VisuallyHiddenInput = styled('input')({});

  const handleMomentsChange = (event: SelectChangeEvent) => {
    setMoments(event.target.value as string);
  };
  const handleValidationChange = (event: SelectChangeEvent) => {
    setValidation(event.target.value as string);
  };

  const handleFileUpload = (event: null) => {

  }

  return <main>
    <h1>
      Welcome to shape it off
    </h1>
    <Stack spacing={3} direction="row">
      <FormControl>
        <FormLabel>Upload an image here (it can be .png, .jpg, or .jpeg)</FormLabel>
        <Button variant="contained" startIcon={MdDownload}>
          Charge an image here
          <VisuallyHiddenInput type="file" />
        </Button>
        <FormLabel>Select a model</FormLabel>
        <RadioGroup>
          <FormControlLabel value="decisions_tree" label="Decisions tree" control={<Radio />} />
          <FormControlLabel value="svm_gaussian" label="SVM (Gaussian Algorithm)" control={<Radio />} /> 
        </RadioGroup>
        <InputLabel>Select the moments</InputLabel>  
        <Select label="moments" value={moments} onChange={handleMomentsChange}>
          <MenuItem value={10}>Hu moments</MenuItem>
          <MenuItem value={20}>Zernike moments</MenuItem>
        </Select>
        <InputLabel>Select the validation method</InputLabel>
        <Select label="validation" value={validation} onChange={handleValidationChange}>
          <MenuItem value={10}>10 Fold cross validation</MenuItem>
          <MenuItem value={20}>Hold out</MenuItem>
        </Select>
      </FormControl>
    </Stack>
    </main>
}