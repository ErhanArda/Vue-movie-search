<template>
    <div>
        <b-navbar toggleable="sm" type="dark" variant="info">
        <b-navbar-brand href="#">Imdb</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <router-link to="/" class="nav-link">Home</router-link>
                <router-link to="/favorites" class="nav-link">Favorites</router-link>
            </b-navbar-nav>
        </b-collapse>
        </b-navbar>
    </div>
</template>

<script>
export default {
    name: "Navbar",
};
</script>

<style lang="scss" scoped></style>
