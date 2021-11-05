import React from "react";

export default function SignUp(props) {
    return (
        <div class="main">
            <form class="container">
                <h2>Digite seus dados</h2>
                <input
                    placeholder="Seu email"
                    type="text"
                ></input>
                <input
                    placeholder="Nome"
                    type="text"
                ></input>
                <input
                    placeholder="Sua senha"
                    type="password"
                ></input>
                <button class="btn">Criar</button>
                <button class="btn">Voltar</button>
            </form>
        </div>
    )
}