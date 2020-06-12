import { IsInt, IsString, MaxLength, MinLength, IsDate, IsOptional } from "class-validator";
//import { Optional } from "@nestjs/common";

export class CustomerDto {

    @IsInt({ message: 'O campo Id não é um numero inteiro válido!' })
    id: number;

    @IsString({message: "O campo name não é uma string válida"})
    @MinLength(10, {message: "O name deve ter ao menos 10 caracteres" })
    @MaxLength(30, {message: "O name deve ter menos de 30 caracteres" })
    name: string;

    @IsString({message: "O campo email não é uma string válida"})
    @MaxLength(80, {message: "O email deve ter menos de 80 caracteres" })
    email: string;

    @IsString({message: "O campo phone não é uma string válida"})
    @MaxLength(20, {message: "O phone deve ter menos de 20 caracteres" })
    phone: string;

    @IsOptional()
    @IsString({message: "O campo CPF não e uma string válida"})
    @MinLength(14, {message: "O CPF deve ter 14 caracteres, no formato xxx.xxx.xxx-xx"})
    @MaxLength(14, {message: "O CPF deve ter 14 caracteres, no formato xxx.xxx.xxx-xx"})
    cpf: string;

    @IsOptional()
    @IsString({message: "O campo dataNascimento não é uma string válida"})
    @MinLength(10, {message: "O dataNascimento deve ter 10 caracteres, no formato DD/MM/AAAA"})
    @MaxLength(10, {message: "O dataNascimento deve ter 10 caracteres, no formato DD/MM/AAAA"})
    dataNascimento: string;


    @IsOptional()
    @IsString({message: "O campo cpf não é uma string válida"})
    cep: string;

    @IsOptional()
    @IsString({message: "O campo sexo não é uma string válida"})
    sexo: string;

    @IsOptional()
    @IsString({message: "O campo rua não é uma string válida"})
    @MaxLength(50, {message: "A rua deve ter no máximo 50 caracteres"})
    rua: string;

    @IsOptional()
    @IsString({message: "O campo numero não é uma string válida"})
    numero: string;


}