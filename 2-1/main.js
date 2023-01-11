const usersListContainer = document.getElementById('usersList');
const userProfileModalTitle = document.getElementById('userProfileModalTitle');
const userProfileModalBody = document.getElementById('userProfileModalBody');


let selectedUser = null;

const generateProfileInformation = ({ id, email, first_name, last_name ,avatar}, collapse = true) => {
    return `
        <img src="${avatar}" class="rounded-circle shadow-1-strong d-flex m-auto mb-4" style="height:100px" alt="${id}">
        <h5 class="card-title">${first_name} ${last_name}</h5>
        <hr />
        <p class="small">UID: ${id}</p>
        <hr />
        <p class="small">Email:${email}</p>`

}

const showModalInformation = ({ first_name, last_name, ...params }) => {
    const title = `${first_name} ${last_name}`;
    userProfileModalTitle.innerText = title;

    const profileInfo = generateProfileInformation({ first_name, last_name, ...params }, false);

    userProfileModalBody.innerHTML = profileInfo;
}

const handleOnClickProfileBtn = (id) => {
    const targetUser = users.find(el => el.id === id);
    selectedUser = targetUser;
    showModalInformation(targetUser);
}
const cardGenerator = ({ id, first_name, last_name, avatar, email }) => {
    return `
        <div class="col-12 col-md-6  col-lg-4">
            <div class="card shadow ">
                <img src="${avatar}" class="card-img-top" style="height:300px" alt="${id}">
                    <div class="card-body">
                        <h5 class="card-title">${first_name} ${last_name}</h5>
                        <p class='small'>${first_name} ${last_name} is Maktab 45 user by UID of ${id} , you caneasily get in toch with ${first_name} ${last_name} from <span class="small text-primary">${email}</span>.</p>
                        <hr />
                        <p class="small">UID: ${id}</p>
                        <hr />
                        <p class="small">Email:${email}</p>
                        <button
                            onclick="handleOnClickProfileBtn(${id})"
                            class="btn btn-primary rounded-3 w-100"
                            data-bs-toggle="modal" data-bs-target="#userProfileModal"
                        >
                            Profile
                        </button>
                    </div>
            </div>
        </div>
        `
}

const usersListGenerator = () => {
    let usersListBody = '';
    for (const user of users) {
        usersListBody += cardGenerator(user);
    }
    return usersListBody;
}

const renderUsersList = () => {
    usersListContainer.innerHTML = usersListGenerator();
}
renderUsersList();


