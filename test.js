const text = `{%- macro assert_passed(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
{%- if not arg1 -%}
    {#- send webhook event with error here -#}
{%- else -%}
    {{- powerjinja.core.handle_queue(arg1, arg2, arg3, arg4, arg5, macros, index) -}}
{%- endif -%}
{%- endmacro -%}

{#- ----------------------------------------- -#}
{#-           PROPERTIES IMPLEMENTED          -#}
{#- - action                                  -#}
{#- - button_type                             -#}
{#- - button_copy                             -#}
{#- - product_id                              -#}
{#- - title                                   -#}
{#- - brand                                   -#}
{#- - category_1                              -#}
{#- - category_2                              -#}
{#- - categories_path                         -#}
{#- - category_id                             -#}
{#- - categories_ids                          -#}
{#- - price                                   -#}
{#- - discount_percentage                     -#}
{#- - original_price                          -#}
{#- - location                                -#}
{#- - local_currency                          -#}
{#- - language                                -#}
{#- - product_list                            -#}
{#- - product_ids                             -#}
{#- - total_quantity                          -#}
{#- - total_price                             -#}
{#- ----------------------------------------- -#}

{#- ----------------------------------------- -#}
{#-        PROPERTIES NOT IMPLEMENTED         -#}
{#- - page_type                               -#}
{#- - variant_id                              -#}
{#- - tags                                    -#}
{#- - category_3                              -#}
{#- - price_local_currency                    -#}
{#- - original_price_local_currency           -#}
{#- - domain                                  -#}
{#- - variant_ids                             -#}
{#- - variant_list                            -#}
{#- - total_price_without_tax                 -#}
{#- - total_price_local_currency              -#}
{#- ----------------------------------------- -#}


{#- ------------------------------------------------------------ -#}
{#-                             NOTE                             -#}
{#- Each section below (split by properties and wrapped in outer -#}
{#- macro) has inverted flow. Macros at the bottom of the        -#}
{#- section are called first and and each macro calls back the   -#}
{#- macro right above it.                                        -#}
{#- ------------------------------------------------------------ -#}

{#- Check cart_update.action -#}
{%- macro check_cu_action() -%}
{%- macro _cu_action_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_equal_one_of(event["action"], ["add", "remove", "empty"], arg5="Property action has invalid value", macros=[assert_passed]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "action", arg5="Property action is missing", macros=[assert_passed, _cu_action_1]) -}}
{%- endmacro -%}
{{- check_cu_action() -}}


{#- Check cart_update.button_type -#}
{%- macro check_cu_button_type() -%}
{%- macro _cu_button_type_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_equal_one_of(event["button_type"], ["Product detail", "Add to cart overlay"], arg5="Property button_type has invalid value", macros=[assert_passed]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "button_type", arg5="Property button_type is missing", macros=[assert_passed, _cu_button_type_1]) -}}
{%- endmacro -%}
{{- check_cu_button_type() -}}


{#- Check cart_update.button_copy -#}
{%- macro check_cu_button_copy() -%}
{%- macro _cu_button_copy_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_equal_one_of(event["button_copy"], ["Add", "Purchase", "Add to cart"], arg5="Property button_copy has invalid value", macros=[assert_passed]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "button_copy", arg5="Property button_copy is missing", macros=[assert_passed, _cu_button_copy_1]) -}}
{%- endmacro -%}
{{- check_cu_button_copy() -}}


{#- Check cart_update.product_id -#}
{%- macro check_cu_product_id() -%}
{%- macro _cu_product_id_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_numeric(event["product_id"], 8, arg5="Property product_id is not numeric-only", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_product_id_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_of_length(event["product_id"], 8, arg5="Property product_id has incorrect length", macros=[assert_passed, _cu_product_id_3]) -}}
{%- endmacro -%}
{%- macro _cu_product_id_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["product_id"], arg5="Property product_id is not a string", macros=[assert_passed, _cu_product_id_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "product_id", arg5="Property product_id is missing", macros=[assert_passed, _cu_product_id_1]) -}}
{%- endmacro -%}
{{- check_cu_product_id() -}}


{#- Check cart_update.title -#}
{%- macro check_cu_title() -%}
{%- macro _cu_title_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["title"], 0, arg5="Property title is empty", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_title_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["title"], arg5="Property title is not a string", macros=[assert_passed, _cu_title_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "title", arg5="Property title is missing", macros=[assert_passed, _cu_title_1]) -}}
{%- endmacro -%}
{{- check_cu_title() -}}


{#- Check cart_update.brand -#}
{%- macro check_cu_brand() -%}
{%- macro _cu_brand_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["brand"], 0, arg5="Property brand is empty", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_brand_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["brand"], arg5="Property brand is not a string", macros=[assert_passed, _cu_brand_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "brand", arg5="Property brand is missing", macros=[assert_passed, _cu_brand_1]) -}}
{%- endmacro -%}
{{- check_cu_brand() -}}


{#- Check cart_update.category_1 -#}
{%- macro check_cu_category_1() -%}
{%- macro _cu_category_1_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["category_1"], 0, arg5="Property category_1 is empty", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_category_1_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["category_1"], arg5="Property category_1 is not a string", macros=[assert_passed, _cu_category_1_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "category_1", arg5="Property category_1 is missing", macros=[assert_passed, _cu_category_1_1]) -}}
{%- endmacro -%}
{{- check_cu_category_1() -}}


{#- Check cart_update.category_2 -#}
{%- macro check_cu_category_2() -%}
{%- macro _cu_category_2_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["category_2"], 0, arg5="Property category_2 is empty", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_category_2_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["category_2"], arg5="Property category_2 is not a string", macros=[assert_passed, _cu_category_2_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "category_2", arg5="Property category_2 is missing", macros=[assert_passed, _cu_category_2_1]) -}}
{%- endmacro -%}
{{- check_cu_category_2() -}}


{#- Check cart_update.categories_path -#}
{%- macro check_cu_categories_path() -%}
{%- macro _cu_categories_path_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.contains_times(event["categories_path"], ">", 2, arg5="Property categories_path is not using \">\"", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_categories_path_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["categories_path"], 0, arg5="Property categories_path is empty", macros=[assert_passed, _cu_categories_path_3]) -}}
{%- endmacro -%}
{%- macro _cu_categories_path_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["categories_path"], arg5="Property categories_path is not a string", macros=[assert_passed, _cu_categories_path_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "categories_path", arg5="Property categories_path is missing", macros=[assert_passed, _cu_categories_path_1]) -}}
{%- endmacro -%}
{{- check_cu_categories_path() -}}


{#- Check cart_update.category_id -#}
{%- macro check_cu_category_id() -%}
{%- macro _cu_category_id_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_longer_than(event["category_id"], 0, arg5="Property category_id is empty", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_category_id_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["category_id"], arg5="Property category_id is not a string", macros=[assert_passed, _cu_category_id_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "category_id", arg5="Property category_id is missing", macros=[assert_passed, _cu_category_id_1]) -}}
{%- endmacro -%}
{{- check_cu_category_id() -}}


{#- Check cart_update.categories_ids -#}
{%- macro check_cu_categories_ids() -%}
{%- macro _cu_categories_ids_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_array_of_string(event["categories_ids"], arg5="Property categories_ids contains non-string items", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_categories_ids_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.array.all(event["categories_ids"], arg5="Property categories_ids is empty or contains empty values", macros=[assert_passed, _cu_categories_ids_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "categories_ids", arg5="Property categories_ids is missing", macros=[assert_passed, _cu_categories_ids_1]) -}}
{%- endmacro -%}
{{- check_cu_categories_ids() -}}


{#- Check cart_update.price -#}
{%- macro check_cu_price() -%}
{%- macro _cu_price_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nonnegative(event["price"], arg5="Property price is negative", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_price_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nan(event["price"], arg5="Property price is NaN", macros=[powerjinja.boolean.not, assert_passed, _cu_price_3]) -}}
{%- endmacro -%}
{%- macro _cu_price_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["price"], arg5="Property price is not a number type", macros=[assert_passed, _cu_price_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "price", arg5="Property price is missing", macros=[assert_passed, _cu_price_1]) -}}
{%- endmacro -%}
{{- check_cu_price() -}}


{#- Check cart_update.original_price -#}
{%- macro check_cu_original_price() -%}
{%- macro _cu_original_price_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nonnegative(event["original_price"], arg5="Property original_price is negative", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_original_price_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nan(event["original_price"], arg5="Property original_price is NaN", macros=[powerjinja.boolean.not, assert_passed, _cu_original_price_3]) -}}
{%- endmacro -%}
{%- macro _cu_original_price_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["original_price"], arg5="Property original_price is not a number type", macros=[assert_passed, _cu_original_price_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "original_price", arg5="Property original_price is missing", macros=[assert_passed, _cu_original_price_1]) -}}
{%- endmacro -%}
{{- check_cu_original_price() -}}


{#- Check cart_update.discount_percentage -#}
{%- macro check_cu_discount_percentage() -%}
{%- macro _cu_discount_percentage_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_in_range(event["discount_percentage"], 0, 100, arg5="Property discount_percentage is not in range [0, 100]", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_discount_percentage_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nan(event["discount_percentage"], arg5="Property discount_percentage is NaN", macros=[powerjinja.boolean.not, assert_passed, _cu_discount_percentage_3]) -}}
{%- endmacro -%}
{%- macro _cu_discount_percentage_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["discount_percentage"], arg5="Property discount_percentage is not a number type", macros=[assert_passed, _cu_discount_percentage_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "discount_percentage", arg5="Property discount_percentage is missing", macros=[assert_passed, _cu_discount_percentage_1]) -}}
{%- endmacro -%}
{{- check_cu_discount_percentage() -}}


{#- Check cart_update.discount_value -#}
{#- NOTE: Last callback checks if values is between 0 and value of original price. If there is no original price, remove the last callback. #}
{%- macro check_cu_discount_value() -%}
{%- macro _cu_discount_value_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_in_range(event["discount_value"], 0, event["original_price"], arg5="Property discount_value is not in range [0, original_price]", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_discount_value_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nan(event["discount_value"], arg5="Property discount_value is NaN", macros=[powerjinja.boolean.not, assert_passed, _cu_discount_value_3]) -}}
{%- endmacro -%}
{%- macro _cu_discount_value_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["discount_value"], arg5="Property discount_value is not a number type", macros=[assert_passed, _cu_discount_value_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "discount_value", arg5="Property discount_value is missing", macros=[assert_passed, _cu_discount_value_1]) -}}
{%- endmacro -%}
{{- check_cu_discount_value() -}}


{#- Check cart_update.location -#}
{%- macro check_cu_location() -%}
{%- macro _cu_location_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_url(event["location"], arg5="Property location has invalid value", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_location_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["location"], arg5="Property location is not a string", macros=[assert_passed, _cu_location_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "location", arg5="Property location is missing", macros=[assert_passed, _cu_location_1]) -}}
{%- endmacro -%}
{{- check_cu_location() -}}


{#- Check cart_update.local_currency -#}
{%- macro check_cu_local_currency() -%}
{%- macro _cu_local_currency_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_alpha(event["local_currency"], 8, arg5="Property local_currency contains non-alphabetic characters", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_local_currency_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_of_length(event["local_currency"], 3, arg5="Property local_currency has incorrect length", macros=[assert_passed, _cu_local_currency_3]) -}}
{%- endmacro -%}
{%- macro _cu_local_currency_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["local_currency"], arg5="Property local_currency is not a string", macros=[assert_passed, _cu_local_currency_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "local_currency", arg5="Property local_currency is missing", macros=[assert_passed, _cu_local_currency_1]) -}}
{%- endmacro -%}
{{- check_cu_local_currency() -}}


{#- Check cart_update.language -#}
{%- macro check_cu_language() -%}
{%- macro _cu_language_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_alpha(event["language"], 8, arg5="Property language contains non-alphabetic characters", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_language_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.string.is_of_length(event["language"], 2, arg5="Property language has incorrect length", macros=[assert_passed, _cu_language_3]) -}}
{%- endmacro -%}
{%- macro _cu_language_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_string(event["language"], arg5="Property language is not a string", macros=[assert_passed, _cu_language_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "language", arg5="Property language is missing", macros=[assert_passed, _cu_language_1]) -}}
{%- endmacro -%}
{{- check_cu_language() -}}


{#- Check cart_update.product_list -#}
{%- macro check_cu_product_list() -%}
{%- macro _cu_product_list_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {#- Following macros check individual components of the product_list objects -#}
    
    {%- set product_ids = event["product_list"] | map(attribute="product_id") -%}
    {%- set product_quantities = event["product_list"] | map(attribute="quantity")-%}

    {%- macro _cu_product_list_8(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_quantities, powerjinja.assert.number.is_nonnegative, arg5="One of quantities in product_list is nagative", macros=[powerjinja.array.all, assert_passed]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_list_7(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_quantities, powerjinja.assert.value.is_integer, arg5="One of quantities in product_list is not an integer", macros=[powerjinja.array.all, assert_passed, _cu_product_list_8]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_list_6(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_quantities, powerjinja.assert.value.is_number, arg5="One of quantities in product_list is not a number type", macros=[powerjinja.array.all, assert_passed, _cu_product_list_7]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_list_5(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_ids, powerjinja.assert.value.is_numeric, arg5="One of product_ids in product_list is not numeric-only", macros=[powerjinja.array.all, assert_passed, _cu_product_list_6]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_list_4(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_ids, powerjinja.assert.value.is_of_length, 8, arg5="One of product_ids in product_list has incorrect length", macros=[powerjinja.array.all, assert_passed, _cu_product_list_5]) -}}
    {%- endmacro -%}

    {{- powerjinja.array.map(product_ids, powerjinja.assert.value.is_string, arg5="One of product_ids in product_list is not a string", macros=[powerjinja.array.all, assert_passed, _cu_product_list_4]) -}}
    
{%- endmacro -%}
{%- macro _cu_product_list_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.array.is_array_of_object(event["product_list"], arg5="Property product_list contains non-object items", macros=[assert_passed, _cu_product_list_3]) -}}
{%- endmacro -%}
{%- macro _cu_product_list_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.array.all(event["product_list"], arg5="Property product_list is empty or contains empty values", macros=[assert_passed, _cu_product_list_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "product_list", arg5="Property product_list is missing", macros=[assert_passed, _cu_product_list_1]) -}}
{%- endmacro -%}
{{- check_cu_product_list() -}}


{#- Check cart_update.product_ids -#}
{%- macro check_cu_product_ids() -%}
    {%- macro _cu_product_list_4(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_ids, powerjinja.assert.value.is_numeric, arg5="Property product_ids contains items that are not numeric-only", macros=[powerjinja.array.all, assert_passed]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_ids_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(product_ids, powerjinja.assert.value.is_of_length, 8, arg5="Property product_ids contains items of incorrect length", macros=[powerjinja.array.all, assert_passed, _cu_product_ids_4]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_ids_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.map(event["product_ids"], powerjinja.assert.value.is_string, arg5="Property product_ids contains non-string items", macros=[powerjinja.array.all, assert_passed, _cu_product_ids_3]) -}}
    {%- endmacro -%}
    {%- macro _cu_product_ids_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
        {{- powerjinja.array.all(event["product_ids"], arg5="Property product_ids is empty or contains empty values", macros=[assert_passed, _cu_product_ids_2]) -}}
    {%- endmacro -%}

{{- powerjinja.array.map(event["product_ids"], powerjinja.assert.value.is_string, arg5="One of product_id's is not a string", macros=[powerjinja.array.all, assert_passed, _cu_product_list_4]) -}}
{{- powerjinja.assert.object.has_property(event, "product_ids", arg5="Property product_ids is missing", macros=[assert_passed, _cu_product_ids_1]) -}}
{%- endmacro -%}
{{- check_cu_product_ids() -}}


{#- Check cart_update.total_quantity -#}
{%- macro check_cu_total_quantity() -%}
{%- macro _cu_total_quantity_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nonnegative(event["total_quantity"], arg5="Property total_quantity is negative", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_total_quantity_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_integer(event["total_quantity"], arg5="Property total_quantity is not an integer", macros=[assert_passed, _cu_total_quantity_3]) -}}
{%- endmacro -%}
{%- macro _cu_total_quantity_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["total_quantity"], arg5="Property total_quantity is not a number type", macros=[assert_passed, _cu_total_quantity_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "total_quantity", arg5="Property total_quantity is missing", macros=[assert_passed, _cu_total_quantity_1]) -}}
{%- endmacro -%}
{{- check_cu_total_quantity() -}}


{#- Check cart_update.total_price -#}
{%- macro check_cu_total_price() -%}
{%- macro _cu_total_price_3(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nonnegative(event["total_price"], arg5="Property total_price is negative", macros=[assert_passed]) -}}
{%- endmacro -%}
{%- macro _cu_total_price_2(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.number.is_nan(event["total_price"], arg5="Property total_price is NaN", macros=[powerjinja.boolean.not, assert_passed, _cu_total_price_3]) -}}
{%- endmacro -%}
{%- macro _cu_total_price_1(arg1=None, arg2=None, arg3=None, arg4=None, arg5=None, macros=[], index=0) -%}
    {{- powerjinja.assert.value.is_number(event["total_price"], arg5="Property total_price is not a number type", macros=[assert_passed, _cu_total_price_2]) -}}
{%- endmacro -%}
{{- powerjinja.assert.object.has_property(event, "total_price", arg5="Property total_price is missing", macros=[assert_passed, _cu_total_price_1]) -}}
{%- endmacro -%}
{{- check_cu_total_price() -}}`

const powerjinja = require('./packages/powerjinja/lib').powerjinja;

console.log(powerjinja.scan(text))