import { useEffect, useState } from "react"

export const useFetch = (url, metodo, data, id) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,

    });

    const initState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }

    useEffect(() => {
        console.log("Realizando peticion....");

        const fetchData = async () => {
            initState();

            try {
                const options = {
                    method: metodo,
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*',
                    },
                };

                if (metodo === 'POST' || metodo === 'PUT') {
                    options.body = JSON.stringify(data);
                }

                if (metodo === 'DELETE' && id !== null) {
                    options.body = JSON.stringify({ id });
                }

                // Para PUT, añadimos el id a la URL
                const requestUrl = metodo === 'PUT' && id ? `${url}/${id}` : url;

                const response = await fetch(requestUrl, options);

                if (!response.ok) {
                    throw new Error(`Error ${response.status}: ${response.statusText}`);
                }

                const responseData = await response.json();
                setState({
                    data: responseData,
                    isLoading: false,
                    hasError: false,
                    error: null,
                });
            } catch (error) {
                setState({
                    data: null,
                    isLoading: false,
                    hasError: true,
                    error: {
                        code: error.message,
                        message: error.toString(),
                    },
                });
            }
        };

        fetchData();
    }, [url, metodo, data, id]);

    // //GET
    // const getFetch = async () => {
    //     initState();
    //     const response = await fetch(url);
    //     console.log(response);
    //     if (!response.ok) {
    //         setState({
    //             data: null,
    //             isLoading: false,
    //             hasError: true,
    //             error: {
    //                 code: response.status,
    //                 message: response.statusText,
    //             }
    //         });
    //         return;
    //     }
    //     const data = await response.json();
    //     setState({
    //         data,
    //         isLoading: false,
    //         hasError: false,
    //         error: null,
    //     });
    // }

    // //POST
    // const postFetch = async (url, data) => {
    //     initState();
    //     const request = await fetch(url, {
    //         method: "POST",
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         }),
    //         body: data
    //     });

    //     if (!request.ok) {
    //         setState({
    //             data: null,
    //             isLoading: false,
    //             hasError: true,
    //             error: {
    //                 code: response.status,
    //                 message: response.statusText,
    //             }
    //         });
    //         return;
    //     }
    //     const data = await request.json();
    //     setState({
    //         data,
    //         isLoading: false,
    //         hasError: false,
    //         error: null,
    //     });
    // }

    // //DELETE
    // const deleteFetch = async (url, id) => {
    //     initState()
    //     const request = await fetch(url, {
    //         method: "delete",
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         }),
    //         body: JSON.stringify({
    //             "id_usuario": id,
    //             "usuario": "",
    //             "contrasena": ""
    //         })
    //     });

    //     if (!request.ok) {
    //         setState({
    //             data: null,
    //             isLoading: false,
    //             hasError: true,
    //             error: {
    //                 code: response.status,
    //                 message: response.statusText,
    //             }
    //         });
    //         return;
    //     }
    //     const data = await request.json();
    //     setState({
    //         data,
    //         isLoading: false,
    //         hasError: false,
    //         error: null,
    //     });
    // }

    // //UPDATE
    // const updateFetch = async(url, data) => {
    //     initState();
    //     const request = await fetch(url, {
    //         method: "POST",
    //         headers: new Headers({
    //             'Content-Type': 'application/json',
    //             'Access-Control-Allow-Origin': '*',
    //         }),
    //         body: data
    //     });

    //     if (!request.ok) {
    //         setState({
    //             data: null,
    //             isLoading: false,
    //             hasError: true,
    //             error: {
    //                 code: response.status,
    //                 message: response.statusText,
    //             }
    //         });
    //         return;
    //     }
    //     const data = await request.json();
    //     setState({
    //         data,
    //         isLoading: false,
    //         hasError: false,
    //         error: null,
    //     });
    // }

    return (
        {
            data: state.data,
            isLoading: state.isLoading,
            hasError: state.hasError,
            error: state.error
        }
    )


}