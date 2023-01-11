
function renderTable(sortBy = null) {
    let users = [...userData]

    $('tbody').html("")
    $('thead').html("")

    if (!!sortBy) {
        users.sort((a, b) => {
            const current = a[sortBy].toString()
            const next = b[sortBy].toString()
            next.localCompare(current, undefined, { numeric: true, sensitivity: 'base' })
        })
    }

    if (userData.length === 0) return;

    let tablalecolumns = ['row', ...Object.keys(users[0])].map(column => {
        if (column === 'row') {
            return `<th>${column}</th>`
        }
        return `<th onclick="renderTable("${column}")">${column}</th>`
    }).join('')

    $('thead').append(`<tr>${tablalecolumns}</tr>`)

    console.log(userData[0].uid);

    for (const [index, user] of users.entries()) {

        $('tbody').append(
            `<tr onclick=renderReadUser('${user.uid}')>
            <td>${index + 1}</td>
            <td>${user.uid}</td>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.city}</td>
            <td>${user.postalCode}</td>
            <td>${user.phoneNumber}</td>
            <td>${user.position}</td>
        </tr>`
        )
    }
}

$(() => renderTable())


function renderReadUser(uid) {
    const user = userData.find(user => user.uid === +(uid))
    resetModal()

    openModal()

    $('.modalHeader').text('User Info')

    for (const key in user) {
        $('.modalContent').append(`<div>${key}: ${user[key]}</div>`)
    }
    $('.modalFooter').html(`
    <button onclick='renderUpdateUser(${uid})'>update</button>
    <button onclick="deleteUser(${uid})">delete</button>
`)
}

function deleteUser(uid) {
    const user = userData.find(user => user.uid === +(uid))

    console.log(user);
    userData = userData.filter(item => item.uid !== user.uid)

    console.log(userData);

    renderTable()
    closeModal()
}

function renderUpdateUser(uid) {
    resetModal()
    const user = userData.find(user => user.uid === +(uid))

    $('.modalHeader').text('updae user')

    for (const key in user) {
        console.log(key);
        if (key === 'uid') {
            $('.modalContent').append(
                `<input type="text" id="${key}" class="updateInput" value="${user[key]}" disabled></input>`)
        } else {
            $('.modalContent').append(`<input type="text" id="${key}" class="updateInput" value="${user[key]}"></input>`)
        }

    }


    $('.modalFooter').html(`
            <button onclick='updateUser(${uid})'>save</button>
            <button onclick='renderUpdateUser(${uid})'>cancle</button>
        `)

}

function updateUser() {
    const user = userData.find(user => user.uid === +(uid))

    const updateInputs = document.querySelectorAll('.updateInputs')

    for (const input of $('.updateInputs')) {
        if (input.value.trim() === "") return "invalid input"

        if (input.uid == 'uid') {
            user[input.id] = Number(input.value)
            continue;
        }


        user[input.id] = input.value
    }
    closeModal()
    renderTable()
}

