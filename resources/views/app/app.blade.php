@extends('layouts.vue')

@push('top-resource')
<script type="text/javascript">
    window.vuebnb_server_data  = "{!! addslashes(json_encode($data)) !!}";
</script>

<!-- Scripts -->
<script src="{{ mix('js/app.js') }}" defer></script>
@endpush
