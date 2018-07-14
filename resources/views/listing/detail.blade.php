@extends('layouts.page')
@push('top-resource')
<script type="text/javascript">
    window.vuebnb_listing_model = "{!! addslashes(json_encode($model)) !!}"
</script>
@endpush

@section('content')
<div class="header">
    <div class="header-img" :style="headerImageStyle">
        <button class="view-photos" @click="modalOpen = true">View Photos</button>
    </div>
</div>
<div class="container">
    <div class="heading">
        <h1>@{{ title }}</h1>
        <p>@{{ address }}</p>
    </div>
    <hr>
    <div class="about">
        <h3>About this listing</h3>
        <p :class="{ contracted: contracted }">@{{ about }}</p>
        <button v-if="contracted" class="more" @click="contracted = false">+ More</button>
    </div>
    <div class="lists">
        <hr>
        <div class="amenities list">
            <div class="title"><strong>Amenities</strong></div>
            <div class="content">
                <div class="list-item" v-for="amenity in amenities">
                    <i class="fa fa-lg" v-bind:class="amenity.icon"></i>
                    <span>@{{ amenity.title }}</span>
                </div>
            </div>
        </div>
        <hr>
        <div class="prices list">
            <div class="title">
                <strong>Prices</strong>
            </div>
            <div class="content">
                <div class="list-item" v-for="price in prices">
                    @{{ price.title }}: <strong>@{{ price.value }}</strong>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="modal" :class="{ show : modalOpen }">
    <button v-on:click="modalOpen = false" class="modal-close">
        &times;
    </button>
    <div class="modal-content">
        <img :src="images[0]" />
    </div>
</div>
@endsection
