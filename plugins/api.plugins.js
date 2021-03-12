export default  ({app}, inject) => {

    inject('login', (body) => {
        return fetch(`${process.env.API_URL}/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "Application/json",
              },
              body: JSON.stringify(body)
            })
            .then(response => response.json()
        )
    }),

    inject('getMe', (id, token) => {
        return fetch(`${process.env.API_URL}/user/${id}`,
            {
              headers: {
                "Authorization": token
              }
            })
            .then(response => response.json()
        )
    })
}