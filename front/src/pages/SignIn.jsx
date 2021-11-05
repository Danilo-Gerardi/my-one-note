import React from "react";

export default function SignIn(props) {
    return (
        <div class="main">
            <form class="container">
                <h2>Real Portifólio</h2>
                <input
                    placeholder="Seu email"
                    type="text"
                ></input>
                <input
                    placeholder="Sua senha"
                    type="password"
                ></input>
                <button class="btn">Entrar</button>
                Não tem conta? Crie uma aqui.
            </form>
        </div>
    )
}