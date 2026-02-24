"use client"
import { Button } from '@/components/ui/button'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterSchema, RegisterType,  } from './../schemas/regsiter.schema';
import axios from 'axios'

export default function Register() {

const form = useForm({
  defaultValues:{
    name: "",
    email:"",
    password:"",
    rePassword:"",
    phone:"",


},
resolver:zodResolver(RegisterSchema)


})


async function handleSignUP(values: RegisterType) {
  try {
    const { data } = await axios.post(
      "https://ecommerce.routemisr.com/api/v1/auth/signup",
      values
    );

    console.log("Success:", data);

  } catch (error: any) {
    console.log("Error:", error.response?.data);
  }
}


  return <>
<div className="  container text-center mx-auto max-w-5xl">
  
  
  <h1 className='text-3xl font-bold text-center my-6'>Register Page</h1>
  
  
  <div>

<form   onSubmit={form.handleSubmit(handleSignUP)} action=""> 


<Controller
  name="name"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Name</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your name"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="email"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Email</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your email"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="password"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Password</FieldLabel>
    
      <Input
      type="password"
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your password"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="rePassword"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Re-enter Password  </FieldLabel>
      <Input
            type="password"

        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Re-enter your password"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Controller
  name="phone"
  control={form.control}
  render={({ field, fieldState }) => (
    <Field data-invalid={fieldState.invalid}>
      <FieldLabel htmlFor={field.name}>Phone Number</FieldLabel>
      <Input
        {...field}
        id={field.name}
        aria-invalid={fieldState.invalid}
        placeholder="Enter your phone number"
        autoComplete="off"
      />
   
      {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
    </Field>
  )}
/>

<Button className='w-full mt-5 cursor-pointer'> sign up </Button>

</form>

  </div>
  
  
  </div>  
  </>
}