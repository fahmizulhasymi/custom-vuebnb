@extends('layouts.page') @push('top-resource')
<script type="text/javascript">
    window.vuebnb_listing_model = "{!! addslashes(json_encode($model)) !!}"
</script>
@endpush

@section('content')

@endsection
